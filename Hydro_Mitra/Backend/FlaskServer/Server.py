from ultralytics import YOLO
import cv2
import matplotlib.pyplot as plt


model = YOLO('YoloV8MicroplasticDetection.pt')  


img = './source/micro-plastic.jpg'  # Replace with your image path

# Perform inference
results = model(img)


# Display the image with bounding boxes using OpenCV
annotated_img = results[0].plot()  # Annotate the image with boxes

# Show the image using matplotlib
plt.imshow(cv2.cvtColor(annotated_img, cv2.COLOR_BGR2RGB))
plt.axis('off')  # Hide axes
plt.show()