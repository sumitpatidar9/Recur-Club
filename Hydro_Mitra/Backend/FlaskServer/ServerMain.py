from flask import Flask, request, jsonify
from ultralytics import YOLO
import cv2
import os

app = Flask(__name__)

# Load models
model_microplastics = YOLO('YoloV8MicroplasticDetection.pt')
model_algae = YOLO('YoloV8AlgaeDetection.pt')
model_polythene = YOLO('YoloV8PolytheneDetection.pt')
model_species = YOLO('YoloV8SpeciesDetection.pt')


@app.route('/microplastics', methods=['POST'])
def process_microplastics():
    print("Microplastics route called")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the uploaded file to the specified path
    input_image_path = './uploads/' + file.filename
    file.save(input_image_path)

    # Process the image using YOLO microplastics model
    results = model_microplastics(input_image_path)
    annotated_img = results[0].plot()

    # Save the processed image
    output_image_path = r'C:\Users\sumit\Desktop\SIH\Server\uploads\processed_' + file.filename
    cv2.imwrite(output_image_path, annotated_img)
    os.remove(input_image_path)

    return jsonify({'processedImagePath': output_image_path})


@app.route('/algae', methods=['POST'])
def process_algae():
    print("Algae route called")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    input_image_path = './uploads/' + file.filename
    file.save(input_image_path)

    # Process the image using YOLO algae model
    results = model_algae(input_image_path)
    annotated_img = results[0].plot()

    output_image_path = r'C:\Users\sumit\Desktop\SIH\Server\uploads\processed_' + file.filename
    cv2.imwrite(output_image_path, annotated_img)
    os.remove(input_image_path)

    return jsonify({'processedImagePath': output_image_path})


@app.route('/polythene', methods=['POST'])
def process_polythene():
    print("Polythene route called")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    input_image_path = './uploads/' + file.filename
    file.save(input_image_path)

    # Process the image using YOLO polythene model
    results = model_polythene(input_image_path)
    annotated_img = results[0].plot()

    output_image_path = r'C:\Users\sumit\Desktop\SIH\Server\uploads\processed_' + file.filename
    cv2.imwrite(output_image_path, annotated_img)
    os.remove(input_image_path)

    return jsonify({'processedImagePath': output_image_path})


@app.route('/species', methods=['POST'])
def process_species():
    print("Species route called")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    input_image_path = './uploads/' + file.filename
    file.save(input_image_path)

    # Process the image using YOLO species model
    results = model_species(input_image_path)
    annotated_img = results[0].plot()

    output_image_path = r'C:\Users\sumit\Desktop\SIH\Server\uploads\processed_' + file.filename
    cv2.imwrite(output_image_path, annotated_img)
    os.remove(input_image_path)

    return jsonify({'processedImagePath': output_image_path})


if __name__ == '__main__':
    # Ensure uploads directory exists
    if not os.path.exists('./uploads'):
        os.makedirs('./uploads')

    app.run(host='127.0.0.1', port=5001)
