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

        1.Agregar en el header del index.html la etiqueta <link></link>:

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
            crossorigin="anonymous">

        2.Agregar en el body del index.html (preferentemente antes de cerrar la etiqueta) los siguientes script:

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" 
            integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" 
            crossorigin="anonymous"></script>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" 
            integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" 
            crossorigin="anonymous"></script>

### GIF  de presentacion de EntryLine:

![](gif/Animation.gif)