import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxZYUHfELm5TZ4h40W03GpMvveFDsoGlU",
  authDomain: "quiz-app-135e5.firebaseapp.com",
  projectId: "quiz-app-135e5",
  storageBucket: "quiz-app-135e5.appspot.com",
  messagingSenderId: "415083600654",
  appId: "1:415083600654:web:96575242910ba0f167555f"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();


export const FireConfig = {
  auth,
  GoogleProvider
}