import cv2
from ultralytics import YOLO

# Load the YOLOv8 model (change 'yolov8n' to yolov8s, yolov8m, yolov8l, etc., for different sizes)
model = YOLO('YoloV8MicroplasticDetection.pt')  # Using YOLOv8n model (nano), you can switch to 'yolov8s.pt', 'yolov8m.pt', etc.

# Open a video stream (use 0 for webcam, or provide the path to a video file)
cap = cv2.VideoCapture(0)  # Use '0' for webcam, replace with path for video file

# Check if the webcam or video is opened correctly
if not cap.isOpened():
    print("Error: Could not open video stream.")
    exit()

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    if not ret:
        print("Error: Could not read frame.")
        break

    # Run YOLOv8 inference on the frame
    results = model(frame)

    # Convert results to box coordinates and class names
    annotated_frame = results[0].plot()  # Annotated frame with boxes and labels

    # Display the annotated frame
    cv2.imshow('YOLOv8 Object Detection', annotated_frame)

    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close the OpenCV windows
cap.release()
cv2.destroyAllWindows()
