from flask import Flask, request, jsonify, send_file
import tensorflow as tf
from PIL import Image
import numpy as np
import io

app = Flask(__name__)


def preprocess_image(image_f):
    image = image_f.convert('RGB')
    image = image.resize((150, 150))  
    image_array = np.array(image)
    image_array = image_array / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    return image_array




model_pneumonia = tf.keras.models.load_model('Models/Pneumonia.h5')
model_alzheimer = tf.keras.models.load_model('Models/Alzheimers Disease Neuroimaging.h5')
model_tumor_segmentation = tf.keras.models.load_model('Models/TumorSegmentation.h5')  






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








@app.route('/tumor_segmentation', methods=['POST'])
def tumor_segmentation_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    image_array = preprocess_image(image)
    segmented_image_array = model_tumor_segmentation.predict(image_array)
    
  
    segmented_image = np.squeeze(segmented_image_array)  
    segmented_image = (segmented_image * 255).astype(np.uint8)  
    segmented_image_pil = Image.fromarray(segmented_image)
    

    img_byte_arr = io.BytesIO()
    segmented_image_pil.save(img_byte_arr, format='JPEG')
    img_byte_arr.seek(0)
    return send_file(img_byte_arr, mimetype='image/jpeg', headers={'test-result': 'Segmentation Successful'})




if __name__ == '__main__':
    app.run(debug=True, port=8080)
