import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB--G705x-3HGixljgwrl3_M3Yn-W7OkPQ",
  authDomain: "platzimusic-940d8.firebaseapp.com",
  databaseURL: "https://platzimusic-940d8.firebaseio.com",
  projectId: "platzimusic-940d8",
  storageBucket: "",
  messagingSenderId: "938713890707"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth()
export const firebaseDatabase = firebase.database()

export default firebase