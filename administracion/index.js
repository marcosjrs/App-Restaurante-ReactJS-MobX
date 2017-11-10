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
var databaseAlimentos = database.ref('alimentos/');

var addPlato = function (cantidad, descripcion, nombre, precio, imagen) {
    databaseAlimentos.push({
        "cantidad": cantidad,
        "descripcion": descripcion,
        "nombre": nombre,
        "precio": precio,
        "imagen": imagen
    });
}

//Crear platos
var storage = firebase.storage();
var storageRef = storage.ref();

function visualizarImg() {
    var preview = document.querySelector("img");
    var archivo = document.querySelector("input[type=file]").files[0];

    if (archivo) {

        var lector = new FileReader();
        lector.onloadend = function () {
            preview.src = lector.result; //para mostrarlo, lo add como src al <img>
        }
        lector.readAsDataURL(archivo); //con lector leemos, el files[0] de input[type=file]


        var uploadTask = storageRef.child('platos/' + archivo.name).put(archivo);
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

function submitForm() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var urlImg = document.getElementById("urlImagen").value;
    addPlato(0, descripcion, nombre, precio, urlImg);
}

//Leer platos existentes

function imprimirPlatos() {

    var ul = document.getElementById("lista");
    while (ul.hasChildNodes()) { //borrar los que tuviera anteriormente.
        ul.removeChild(ul.firstChild);
    }

    //base datos -> tablas   ... tabla[0]->objetos
    databaseAlimentos.on('value', function (tabla) {
        console.log(tabla.key); // nombre de la tabla  
        tabla.forEach(function (objeto) {
            //objeto puede ser un plato, pero en el futuro pueden ser bebidas, etc... 
            var datosObjeto = objeto.toJSON(); //objeto.key sería el nombre del objeto, creado aleatoriamente cuando creamos el plato

            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            var div = document.createElement("div");
            div.setAttribute("class", "container-img");
            var img = document.createElement("img");

            //Imagen
            img.src = datosObjeto.imagen;
            img.alt = "Imagen de plato " + datosObjeto.nombre;
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
            divBtnDel.setAttribute("onclick", "eliminarPlato(this.id)");
            divBtnDel.appendChild(document.createTextNode("Borrar"));
            li.appendChild(divBtnDel);


            ul.appendChild(li);
        });
    });
}


/**
 * Eliminar un objeto de la tabla
 * @param {*} idObjeto  Es el nombre del objeto dentro de la tabla
 */
function eliminarPlato(idObjeto) {
    var res = confirm("¿Estas seguro que quieres borrar el objeto: " + idObjeto + "?");
    if (res) {
        var objBorrar = firebase.database().ref('alimentos/' + idObjeto);
        objBorrar.remove()
            .then(function () {
                imprimirPlatos();
                console.log("Borrado correctamente.")
            })
            .catch(function (error) {
                console.log("Error al intentar eliminar el objeto. " + error.message);
            });
    }
}