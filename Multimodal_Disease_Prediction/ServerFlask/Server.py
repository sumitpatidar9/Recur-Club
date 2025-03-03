from flask import Flask, request, jsonify, send_file
import tensorflow as tf
from PIL import Image
import numpy as np
import os
import io

app = Flask(__name__)
def preprocess_image(image_f):
    image = image_f.convert('RGB')
    image = image.resize((150, 150))
    image_array = np.array(image)
    image_array = image_array / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    return image_array

# Load models once during application startup
model_tumor = tf.keras.models.load_model('Models/Brain Tumor.h5')
model_pneumonia = tf.keras.models.load_model('Models/Pneumonia.h5')
model_alzheimer = tf.keras.models.load_model('Models/Alzheimers Disease Neuroimaging.h5')
model_segmentation = tf.keras.models.load_model('Brain Tumor Segmentation.h5')






def predict_brain_tumor(image_f):
    image_array = preprocess_image(image_f)
    predictions = model_tumor.predict(image_array)
    predicted_classes = (predictions > 0.5).astype("int32")
    classes = {0: "Normal", 1: "Brain tumor"}
    return classes[predicted_classes[0][0]]


@app.route('/tumor', methods=['POST'])
def predict_tumor():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    result = predict_brain_tumor(image)
    return jsonify({'result': result}), 200








def predict_pneumonia(image_f):
    image_array = preprocess_image(image_f)
    predictions = model_pneumonia.predict(image_array)
    predicted_classes = (predictions > 0.5).astype("int32")
    classes = {0: "Normal", 1: "Pneumonia"}
    return classes[predicted_classes[0][0]]


@app.route('/pneumonia', methods=['POST'])
def predict_pneumonia_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    result = predict_pneumonia(image)
    return jsonify({'result': result}), 200









def predict_alzheimer(image_f):
    image_array = preprocess_image(image_f)
    predictions = model_alzheimer.predict(image_array)
    predicted_classes = np.argmax(predictions, axis=1)
    classes = {0: "Alzheimer's Disease (AD)", 1: "Cognitively Normal (CN)", 2: "Mild Cognitive Impairment (MCI)", 3: "Early Mild Cognitive Impairment (EMCI)"}
    return classes[predicted_classes[0]]


@app.route('/alzheimer', methods=['POST'])
def predict_alzheimer_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    result = predict_alzheimer(image)
    return jsonify({'result': result}), 200







UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/tumor_segmentation', methods=['POST'])
def tumor_segmentation():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        uploaded_file = request.files['file']

        
        image = Image.open(uploaded_file).convert('RGB')  # Ensure 3-channel image
        image = image.resize((256, 256))  # Resize image to 256x256
        image_array = np.array(image) / 255.0  # Normalize pixel values to [0, 1]
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

        # Step 3: Perform inference using the model
        predictions = model_segmentation.predict(image_array)

        # Convert the prediction (assumed to be a single-channel output) to an image
        predicted_image = predictions[0].squeeze()  # Remove batch dimension
        predicted_image = (predicted_image * 255).astype(np.uint8)  # Scale to [0, 255]
        result_image = Image.fromarray(predicted_image)

        # Step 4: Save the result image to a temporary location
        result_path = os.path.join(UPLOAD_FOLDER, f'result_{np.random.randint(1e6)}.jpg')
        result_image.save(result_path)

        # Step 5: Send the result back to the Node.js server
        with open(result_path, 'rb') as f:
            return send_file(
                io.BytesIO(f.read()),
                mimetype='image/jpeg',
                as_attachment=True,
                attachment_filename='segmented_result.jpg',
                headers={
                    'Test-Result': jsonify({"segmentation": "successful"}).get_data(as_text=True),
                }
            )

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run(debug=True, port=8080)


