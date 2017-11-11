import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgOciD_LzNUkQHlkQHiJZibIbGYeJpa8E",
    authDomain: "faketienda-8313f.firebaseapp.com",
    databaseURL: "https://faketienda-8313f.firebaseio.com",
    projectId: "faketienda-8313f",
    storageBucket: "faketienda-8313f.appspot.com",
    messagingSenderId: "1049862575387"
};
firebase.initializeApp(config);

const database = firebase.database();
const platos = database.ref('platos/');
const bebidas = database.ref('bebidas/');

const datos = {platos, bebidas};

export default datos;