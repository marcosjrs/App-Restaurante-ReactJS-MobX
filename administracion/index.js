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
var addPlato = function(cantidad, descripcion, nombre, precio,urlImagen){
    database.ref("alimentos/").push({"cantidad":cantidad,"descripcion":descripcion,"nombre":nombre,"precio":precio, "imagen":imagen});
}

//Crear platos
var storage = firebase.storage();
var storageRef = storage.ref();

function visualizarImg(){
    var preview = document.querySelector("img");
    var archivo = document.querySelector("input[type=file]").files[0];
    
    if(archivo){
        
        var lector = new FileReader();
        lector.onloadend = function(){
            preview.src = lector.result; //para mostrarlo, lo add como src al <img>
        }
        lector.readAsDataURL(archivo); //con lector leemos, el files[0] de input[type=file]
        
        //subimos el archivo
        var uploadTask = storageRef.child('platos/' + archivo.name).put(archivo);
        uploadTask.on('state_changed', function(snapshot){
            console.log(snapshot.state+": "+((snapshot.bytesTransferred / snapshot.totalBytes) * 100) + '% Cargado.');
          }, function(error) {
            console.log("Error en la carga");
          }, function() {
              document.getElementById("urlImagen").value = uploadTask.snapshot.downloadURL;
          });

    }else{
        preview.src="";
    }
}

function submitForm(){
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var urlImg = document.getElementById("urlImagen").value;
    addPlato(0,descripcion,nombre,precio,urlImg);
}

//leer platos existentes


//eliminar platos

