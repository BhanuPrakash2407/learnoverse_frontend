# Learnoverse Frontend

React Native Expo app for the Learnoverse internship assignment.  
Displays a list of YouTube videos fetched from the Django backend and plays them inside the app.

---

## **Tech Stack**
- React Native (Expo managed workflow)
- Axios (HTTP client)
- react-native-youtube-iframe (for in-app YouTube playback)

---

## **Folder Structure**

learnoverse_app/
├── App.js
├── screens/
│ ├── VideoListScreen.js
│ ├── VideoPlayerScreen.js
├── components/
└── config/
└── apiConfig.js

## **Setup Instructions**

1. Clone the repo:

git clone https://github.com/BhanuPrakash2407/learnoverse_frontend.git

cd learnoverse_app

2. Install dependencies:

npm install

3. Run the App

npx expo start
Scan the QR code with Expo Go (on real phone)

Or run in Android/iOS simulator

# Notes
Make sure your backend server is running and accessible from your device/emulator.

Backend URL : https://github.com/BhanuPrakash2407/learnoverse_backend.git

