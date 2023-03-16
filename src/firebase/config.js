import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyCnY3ekP23DUA1eOuh-kbxAY78qwByb_sg',
  authDomain: 'olx-clone-48f36.firebaseapp.com',
  projectId: 'olx-clone-48f36',
  storageBucket: 'olx-clone-48f36.appspot.com',
  messagingSenderId: '207223928153',
  appId: '1:207223928153:web:2d2787838183ed71a80848',
}

export const Firebase = firebase.initializeApp(firebaseConfig) //named export
