import cv2
from ultralytics import YOLO


# Load the YOLOv8 model (ensure the .pt file is in the correct path)
model = YOLO('YoloV8MicroplasticDetection.pt')  # Change this to your model file path


# Provide the path to your video file
video_path = 'source/plastic.mp4'  # Replace with your video file path
cap = cv2.VideoCapture(video_path)  # Open the video file


# Check if the video file is opened correctly
if not cap.isOpened():
    print("Error: Could not open video file.")
    exit()


while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    if not ret:
        print("Error: Could not read frame or end of video reached.")
        break

    # Run YOLOv8 inference on the frame
    results = model(frame)

    # Convert results to box coordinates and class names
    annotated_frame = results[0].plot()  # Annotated frame with boxes and labels

    # Resize the annotated frame to medium size (e.g., 640x480)
    medium_size = (640, 480)  # Set the desired width and height
    resized_frame = cv2.resize(annotated_frame, medium_size)

    # Display the annotated and resized frame
    cv2.imshow('YOLOv8 Object Detection', resized_frame)

    # Press 'q' to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


# Release the capture and close the OpenCV windows
cap.release()
cv2.destroyAllWindows()
