

Esta parte es independiente de la aplicación del App-Restaurante-ReactJS-MobX. Así que para que funcione independientemente se ha instalado de forma global el http-server:

> npm install http-server -g

A continuación nos situamos en esta carpeta (en "administración") y arrancamos el servidor de la siguiente forma:

> http-server

Se abre la siguiente url en el navegador:

> http://127.0.0.1:8080

Para añadir un nuevo tipo (actualmente hay bebidas y platos) solo hace falta añadir un nuevo botón al menu de visualizar.html y agregar.html con el texto del nuevo tipo, por ejemplo postre sería:

> <button class="select-bebida btn btn-default" onclick="return cambiarTipo('postre');">postre</button>