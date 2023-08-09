
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD5a1BCVgfa3A_i-5fwXC5UnoWOKm_nbX8",
  authDomain: "bentaxi-392715.firebaseapp.com",
  projectId: "bentaxi-392715",
  storageBucket: "bentaxi-392715.appspot.com",
  messagingSenderId: "824162450611",
  appId: "1:824162450611:web:e1a9c54255d00405e2c4c6",
  measurementId: "G-TB2NT0DGYV"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };