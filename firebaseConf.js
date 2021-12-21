import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"


export const config = {
    apiKey: "AIzaSyDaxrL_Z32Im2ANZqZ-72hh3fnBUzBjSrg",
    authDomain: "fcom-a10e6.firebaseapp.com",
    projectId: "fcom-a10e6",
    storageBucket: "fcom-a10e6.appspot.com",
    messagingSenderId: "180510365860",
    appId: "1:180510365860:web:80d574176eb69b57116e31",
    measurementId: "G-B2HP9SZDQM"
  };

const app = initializeApp(config);
export const authentication = getAuth(app);