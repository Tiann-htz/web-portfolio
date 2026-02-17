// ─────────────────────────────────────────────────────────────────────────────
// Firebase Configuration
// To connect this to YOUR Firebase project:
//   1. Go to https://console.firebase.google.com and create a new project (or use existing)
//   2. Click "Add app" → Web (</>)
//   3. Register the app — Firebase will show you a firebaseConfig object
//   4. Replace EVERY value below with the values from YOUR firebaseConfig
//   5. In Firebase console → Build → Firestore Database → Create database
//      (choose "Start in test mode" for development)
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            'YOUR_API_KEY',              // ← Replace with your Firebase API Key
  authDomain:        'YOUR_AUTH_DOMAIN',          // ← e.g. your-project.firebaseapp.com
  projectId:         'YOUR_PROJECT_ID',           // ← e.g. your-project-id
  storageBucket:     'YOUR_STORAGE_BUCKET',       // ← e.g. your-project.appspot.com
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',  // ← Numeric sender ID
  appId:             'YOUR_APP_ID',               // ← e.g. 1:123456:web:abcdef
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize and export Firestore database
export const db = getFirestore(app);

export default app;