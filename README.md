# App-Restaurante-ReactJS-MobX

Aplicación web hecha con fines educativos con ReactJs y Mobx la parte pública. 

Con javascript puro y haciendo uso de los servicios de FireBase en la parte de la administración (contenida en la carpeta administracion).

La parte de administración (carpeta administración) está pensada para que sea totalmente independiente, y dentro tiene un propio readme.md

Se hizo mientra se seguía el curso  "React: fundamentos hasta Full-stack", pero con bastantes cambios para una reutilización simple en la parte de la administración, y alguno en los diseños. (En el caso de la parte pública, habría que "darle una vuelta",por que no están pensado en first mobile, pese a integrar bootstrap, pero se hizo muy a posteriori y no se utilizó debidamente).

Para utilizar el proyecto, hay que tener una cuenta en Firebase y añadir un nuevo proyecto (en Firebase) donde, en su Storage, crear una carpeta platos y otra carpeta bebidas. Luego con el config que te dá firebase (actualmente hay un botón "Añade Firebase a tu aplicación Web", pulsando en él te dá esa configuración), habría que ponerla en fireBaseController.js y, dentro de la carpeta administracion, en el index.js. Luego como siempre, npm install y posteriormente npm init. 

