import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

// Missing Firebase config is the #1 cause of "sign in does nothing" reports:
// signInWithEmailAndPassword/createUserWithEmailAndPassword will fail with
// auth/invalid-api-key or similar, LoginPage's catch block will surface that
// as a raw Firebase error string, and it's easy to miss in testing. Fail
// loudly and specifically here instead, in both the browser console (for
// whoever's debugging) and — since this is also read at build time — the
// Vercel build log, since a missing env var in the Vercel project settings
// is the single most common way this bites a deployed app that works fine
// locally.
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    '[WorkPulse] Firebase is not configured: NEXT_PUBLIC_FIREBASE_API_KEY ' +
      'and/or NEXT_PUBLIC_FIREBASE_PROJECT_ID are missing. Sign in and sign ' +
      'up will fail until these are set — locally in .env.local, or in your ' +
      'Vercel project\'s Environment Variables for a deployed app.'
  );
}

function getFirebaseApp(): FirebaseApp {
  const apps = getApps();
  return apps.length ? apps[0]! : initializeApp(firebaseConfig);
}

export const app = getFirebaseApp();
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export default app;
