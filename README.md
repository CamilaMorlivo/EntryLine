### PROYECT NAME: "EntryLine"

EntryLine es un  servicio donde podrás encontrar distintos eventos de diferentes categorías. La aplicación está pensada para ser una aplicacion web en donde puedas comprar tus entradas para conciertos, obras de teatro y distintos eventos de manera fácil e intuitiva. 

Cosas a agregar en un futuro:
->La compra de entradas.
->La posibilidad de crear tu cuenta.
->Al crear tu cuenta, tener un registro de las entradas que compras.

## Pre-requisitos 📋

Instalaciones previas:

    -GitBash v2.35.1.windows.2 [https://git-scm.com/downloads]
    -Node js v18.0.0 [https://nodejs.org/es/] 


Dependencias necesarias:

    -React js [https://reactjs.org/]

        1er comando: npm install -g create-react-app
        2do comando: create-react-app my-app

    -React-router-dom [https://reactrouter.com/en/main]

        Instalar la dependencia con el comando:

            1er comando: npm install react-router-dom

        Importar BrowserRouter, Routes, Route en nuestro archivo App,js:

            import {BrowserRouter,Routes, Route} from "react-router-dom"; 

        Configurar lo siguientes: 

            1.Wrappear (envolver) la app en un BrowserRouter
            2.Crear un Routes(donde proyectamos las vistas navegadas)
            3.Crear los Route's de las distintas navegaciones con sus componentes asociados.

Librerias usadas:

    -Bootstrap [https://getbootstrap.com/]

        1. Ejecutar el siguiente comando en la terminal:

            npm i bootstrap

        2.Importar en el src/index.js:
 
            import * as bootstrap from 'bootstrap'
            import 'bootstrap/dist/css/bootstrap.min.css'
       
    -PopperJs [https://popper.js.org/docs/v2/]

        *Es necesaria esta librería para poder usar bootstrap*

        1. Ejecutar el siguiente comando en la terminal:

            npm i @popperjs/core
    
    -SweetAlert2 [https://sweetalert.js.org/guides/]

        1. Ejecutar el siguiente comando en la terminal:

            npm i sweetalert2 

        2.Importar en los archivos.js donde se use estas alertas:
 
            import swal from 'sweetalert';

### GIF  de presentacion de EntryLine:

![](gif/EntryLine.gif)