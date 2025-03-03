# Multimodal Disease Predictor 🩺🧠🩻

> ⚠️ **Note:** The `.h5` machine learning models are **NOT uploaded** to this repository due to their large size.  
> They can be uploaded in:  
> ```
> Multimodal_Disease_Prediction/ServerFlask/models
> ```

---

## 🔍 Project Overview

**Multimodal Disease Predictor** is a machine learning-powered web application that allows users to upload **MRI** and **X-ray** images to predict diseases automatically. The system processes medical images using advanced deep learning models and provides detailed reports that can be saved and reviewed.

---

## 🧠 Machine Learning (ML) Backend

This project is centered around deep learning for medical image analysis.

- Built with **Convolutional Neural Networks (CNN)** to classify MRI and X-ray images into various disease categories.
- Trained on diverse datasets of medical images to predict multiple diseases.
- Multiple specialized models are used for accurate predictions across different image types.
- Deployed via a **Flask server**, which handles:
  - Loading the trained `.h5` models.
  - Preprocessing incoming images.
  - Running ML inference.
  - Returning the predictions to the main backend.

---

## 🛠️ Tech Stack

### 🌐 Frontend
- **React.js**
  - User-friendly interface for uploading images.
  - **Dashboard** to view the history of previous tests.
  - Ability to generate and download detailed medical reports.

### 🚀 Backend
- **Node.js**
  - Receives medical images from the frontend.
  - Sends images to the **Flask ML server** for prediction.
  - Collects and stores the results.
  - Handles user authentication and profile management.
  - Stores test data and reports in:
    - **MongoDB** for structured data.
    - **Cloud storage (Flutter? [Please clarify if you meant Firebase/another service])** for images.

### 🔬 Machine Learning Server
- **Flask (Python)**
  - Handles the ML workload.
  - Loads pre-trained `.h5` models for inference.
  - Supports multiple disease-specific models.
  - Returns classified results to the Node.js backend.

---

## 📂 Folder Structure
```
Multimodal_Disease_Prediction/
│
├── client/            # React frontend
├── server/            # Node.js backend
├── ServerFlask/       # Flask ML inference server
│   ├── models/       # ⚠️ Place.h5 model files 
│   ├── app.py        # Main Flask app
│   └── ...           
└── README.md
```

---

## 🚀 How to Run

### 1️⃣ Install Dependencies
Each service (`client`, `server`, `ServerFlask`) has its own dependencies. Navigate into each folder and install:

```bash
# For React frontend
cd client
npm install

# For Node.js backend
cd ../server
npm install

# For Flask ML server
cd ../ServerFlask
pip install -r requirements.txt
```

### 2️⃣ Adding `.h5` models
Place your trained models inside:
```
ServerFlask/models/
```

### 3️⃣ Run the servers
```bash
# Start React frontend
cd client
npm start

# Start Node.js backend
cd ../server
node index.js

# Start Flask ML server
cd ../ServerFlask
python app.py
```

---

## 📝 Features
- Upload MRI/X-ray images for instant disease predictions.
- Secure user profiles with complete test history.
- Downloadable reports of test results.
- Multi-model machine learning backend for high accuracy.
