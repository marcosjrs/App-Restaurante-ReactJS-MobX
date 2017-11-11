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


//Login

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("[Usuario logado]");
    } else {
        if(window.location.pathname.indexOf( "/index.html") < 0 ){ //Usuario deslogado
            window.location = "index.html";
        }
    }
});

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(function () {
        window.location = "agregar.html";
    }).
    catch(function (error) {
        console.log("Error al logarse", error);
    });

}

function logout() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogado Correctamente");
    }).catch(function (error) {
        console.log("Error al deslogarse", error);
    });
}

//Crear Tipo ( "plato" , "bebida", ... ). Véase "tipo" como instancia, objeto de una tabla determinada (la tabla se llamará platos, bebida, etc...)  de la BBDD "faketienda"
var storage = firebase.storage();
var storageRef = storage.ref();
/**
 * 
 * @param {*} tipo "Tabla" dentro de la BBDD. Puede ser "plato" o "bebida" o ...
 * @param {*} cantidad 
 * @param {*} descripcion 
 * @param {*} nombre 
 * @param {*} precio 
 * @param {*} imagen 
 */
var addTipo = function (tipo, cantidad, descripcion, nombre, precio, imagen) {
    database.ref(tipo+'s/').push({
        "cantidad": cantidad,
        "descripcion": descripcion,
        "nombre": nombre,
        "precio": precio,
        "imagen": imagen
    }).then(function(){
        window.location = "agregar.html"; // "Agregado correctamente" 
    }).catch(function(err){
        alert("No se ha podido agregar el "+tipo+". "+err);
    });
}

/**
 * Visualiza la imagen seleccionada y la sube automáticamente al firebase.
 * @param {*} tipo Se subira la imagen a carpeta de almacenamiento en el firebase con este nombre en plural quedando "platos" o "bebidas" o...
 */
function visualizarImg(tipo) {
    var preview = document.querySelector("img");
    var archivo = document.querySelector("input[type=file]").files[0];

    if (archivo) {

        var lector = new FileReader();
        lector.onloadend = function () {
            preview.src = lector.result; //para mostrarlo, lo add como src al <img>
        }
        lector.readAsDataURL(archivo); //con lector leemos, el files[0] de input[type=file]


        var uploadTask = storageRef.child(tipo+'s/' + archivo.name).put(archivo); 
        uploadTask.on('state_changed', function (snapshot) {
            console.log(snapshot.state + ": " + ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) + '% Cargado.');
        }, function (error) {
            console.log("Error en la carga");
        }, function () {
            document.getElementById("urlImagen").value = uploadTask.snapshot.downloadURL;
        });

    } else {
        preview.src = "";
    }
}

function submitForm(tipo, evento) {
    evento.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var urlImg = document.getElementById("urlImagen").value;
    addTipo(tipo, 0, descripcion, nombre, precio, urlImg);
}

//Leer elementos existentes
/**
 * Imprimir todos los elementos dentro de una "tabla" determinada. 
 * @param {*} tipo "plato" o "bebida" o ...
 */
function imprimirTipos(tipo) {
    console.log("> Imprimiendo la colección de "+tipo+"s");

    var ul = document.getElementById("lista");
    while (ul.hasChildNodes()) { //borrar los que tuviera anteriormente.
        ul.removeChild(ul.firstChild);
    }

    //base datos -> tablas   ... tabla[0]->objetos . Ej.: faketienda -> platos  ... platos[0] -> {nombre:dlfksdsad, precio:2, ...}
    database.ref(tipo+'s/').on('value', function (tabla) {
        console.log(tabla.key); // nombre de la tabla  
        tabla.forEach(function (objeto) {
            //objeto puede ser un plato, bebida, etc... 
            var datosObjeto = objeto.toJSON(); //objeto.key sería el nombre del objeto, creado aleatoriamente cuando creamos el plato, bebida o el tipo que sea

            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            var div = document.createElement("div");
            div.setAttribute("class", "container-img");
            var img = document.createElement("img");

            //Imagen
            img.src = datosObjeto.imagen;
            img.alt = "Imagen de "+tipo+" " + datosObjeto.nombre;
            div.appendChild(img);
            li.appendChild(div);

            //nombre, descripcion y precio
            var divNombre = document.createElement("div");
            var newContent = document.createTextNode(datosObjeto.nombre);
            divNombre.appendChild(newContent);
            li.appendChild(divNombre);

            var divDesc = document.createElement("div");
            divDesc.appendChild(document.createTextNode(datosObjeto.descripcion));
            li.appendChild(divDesc);

            var divPrecio = document.createElement("div");
            divPrecio.appendChild(document.createTextNode(datosObjeto.precio + " €"));
            li.appendChild(divPrecio);

            var divBtnDel = document.createElement("button");
            divBtnDel.setAttribute("class", "btn btn-danger btn-sm");
            divBtnDel.setAttribute("id", objeto.key);
            divBtnDel.setAttribute("onclick", "eliminarObjeto('"+tipo+"', this.id)");
            divBtnDel.appendChild(document.createTextNode("Borrar"));
            li.appendChild(divBtnDel);


            ul.appendChild(li);
        });
    });
}


/**
 * Eliminar un objeto de la tabla
 * @param {*} tipo "plato" o "bebida" o ...
 * @param {*} idObjeto  Es el nombre del objeto dentro de la tabla
 */
function eliminarObjeto(tipo, idObjeto) {
    var res = confirm("¿Estas seguro que quieres borrar el objeto: " + idObjeto + "?");
    if (res) {
        var objBorrar = firebase.database().ref(tipo+'s/' + idObjeto);
        objBorrar.remove()
            .then(function () {
                imprimirTipos(tipo);
                console.log("Borrado correctamente.")
            })
            .catch(function (error) {
                console.log("Error al intentar eliminar el objeto. " + error.message);
            });
    }
}