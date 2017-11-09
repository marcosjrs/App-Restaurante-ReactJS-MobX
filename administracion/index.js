//Firebase
var config = {
    apiKey: "AIzaSyBgOciD_LzNUkQHlkQHiJZibIbGYeJpa8E",
    authDomain: "faketienda-8313f.firebaseapp.com",
    databaseURL: "https://faketienda-8313f.firebaseio.com",
    projectId: "faketienda-8313f",
    storageBucket: "faketienda-8313f.appspot.com",
    messagingSenderId: "1049862575387"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var addPlato = function(cantidad, descripcion, nombre, precio){
    database.ref("alimentos/").push({"cantidad":cantidad,"descripcion":descripcion,"nombre":nombre,"precio":precio});
}

//crear platos
function submitForm(){
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    addPlato(0,descripcion,nombre,precio);
}

//leer platos existentes


//eliminar platos

