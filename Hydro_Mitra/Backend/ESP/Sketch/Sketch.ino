#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266mDNS.h>

#include <OneWire.h>
#include <DallasTemperature.h>

const char* ssid = "sumit";
const char* password = "Pandasdataset";
const char* serverUrl = "http://192.168.77.147:5000/esp/esp_post";  // mDNS hostname

WiFiClient wifiClient;  // Create a WiFi client object

const int trigPin = 5;  // Trigger pin (GPIO 5 corresponds to D1)
const int echoPin = 4;  // Echo pin (GPIO 4 corresponds to D2)
const int mq135Pin = A0;  // Analog pin for MQ-135
const int tempProbePin = 2;  // Digital pin for DS18B20 (GPIO 2 corresponds to D4)

OneWire oneWire(tempProbePin);  // Set up the one-wire bus
DallasTemperature sensors(&oneWire);  // Create the temperature sensor object

void setup() {
  Serial.begin(115200);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  // Setup mDNS responder
  if (!MDNS.begin("esp8266")) {
    Serial.println("Error setting up MDNS responder!");
  } else {
    Serial.println("mDNS responder started for esp8266.local");
  }

  // Initialize the ultrasonic sensor pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  // Start the temperature sensor
  sensors.begin();
}




// Function to read distance from ultrasonic sensor
long readUltrasonicDistance() {
  // Clear the trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Set the trigger on
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read the echo pin
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate the distance (in cm)
  long distance = duration * 0.034 / 2;  // Speed of sound = 0.034 cm/us
  return distance;
}



// Function to read air quality from MQ-135
int readAirQuality() {
  return analogRead(mq135Pin);  // Read air quality from MQ-135
}



// Function to read temperature from DS18B20
float readTemperature() {
  sensors.requestTemperatures();  // Request temperature readings
  float temperatureC = sensors.getTempCByIndex(0);  // Get temperature in Celsius
  return temperatureC;  // Return temperature in Celsius
}



// Function to send data to server
void sendData(long distance, int airQuality, float temperature) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(wifiClient, serverUrl);
    http.addHeader("Content-Type", "application/json");
    
    // Prepare JSON data with distance, air quality, and temperature
    String jsonData = "{\"distance\":" + String(distance) + ",\"airQuality\":" + String(airQuality) + ",\"temperature\":" + String(temperature) + "}";
    int httpResponseCode = http.POST(jsonData);
    
    // Check response
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Server Response: " + response);
    } else {
      Serial.println("Error on sending POST");
    }
    
    http.end();  // Close connection
  }
}



void loop() {
  long distance = readUltrasonicDistance();  // Get distance
  int airQuality = readAirQuality();  // Read air quality
  float temperature = readTemperature();  // Read temperature

  Serial.print("Distance: ");
  Serial.print(distance);  // Print distance to Serial Monitor
  Serial.print(" | Air Quality: ");
  Serial.print(airQuality);  // Print air quality reading
  Serial.print(" | Temperature: ");
  Serial.println(temperature);  // Print temperature reading

  // Send data to server
  sendData(distance, airQuality, temperature);  // Call sendData function

  delay(10000);  // Wait for 10 seconds before sending the next reading
}
