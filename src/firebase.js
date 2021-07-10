import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAYJc9HrKO2Wfyx0yYr-NQnluwKm2_52xc',
	authDomain: 'linkedin-clone-3a49b.firebaseapp.com',
	projectId: 'linkedin-clone-3a49b',
	storageBucket: 'linkedin-clone-3a49b.appspot.com',
	messagingSenderId: '455019784693',
	appId: '1:455019784693:web:c473c267acd7e78834d8bc',
	measurementId: 'G-T4F8JFDR2F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
