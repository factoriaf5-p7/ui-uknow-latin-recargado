# 🚀U-KNOW 🚀
# Plataforma de aprendizaje cooperativo


Somos una start-up que queremos cambiar el modelo de compartir conocimientos para favorecer el aprendizaje cooperativo y...divertirnos un poco también.

Queremos crear U-KNOW, la nueva plataforma de intercambio de conocimientos y aprendizaje cooperativo. Nuestra aplicación se basará en el sistema de recompensas para mantener la calidad de los contenidos y favorecer la participación.

En este momento nos encontramos en el tramo final de nuestro proyecto de desarrollo el cual estuvo divivido en tres tramos: 

💻En un primer momento en el diseño y creación de bases de datos, el cual fue realizado en MongoDB y luego pudimos hacerlo colaborativo a partir de Mongo Atlas 

💻La segunda etapa fue el diseño y desarrollo de una APIRest, es decir de el backend, para esto utilizamos nest.js y pudimos realizar todas las funciones necesarias para que nuestra aplicación pueda ser utilizada. 

💻Como última instancia nos encontramos en el diseño y desarrollo de nuesta aplicación para ello necesitamos diseñar y llevar a cabo el frontend de la misma; logrando que 
este tenga las funcionalidades esperables. Para el desarrollo de esta etapa utilizamos React y Boostrap para los estilos. 

# ⚙ Requerimientos necesarios ⚙:
<details>
 <summary><b>Hero</b></summary> 
</details>

<details>
 <summary><b>Home</b></summary>
    - La **home**, debe constar de:
        🏘 Una **barra de navegación** superior que sin estado mostrará:
    - Un logo con el nombre de la app
    - Un avatar
        🏘 Una **caja de búsqueda de contenidos** 
        🏘 Una **lista de contenidos** que mostrará una "card" con la información minima del contenido. La lista tendrá scroll infinito y debe cargarse de forma diferida. Cada **tarjeta** mostrará dos botones: "Ver más" y Comprar.
    - "Ver más": muestra un modal con una ampliación de la información y un enlace a ver la información completa con comentarios (opcional)
    - Comprar: chequea si hay saldo y muestra pantalla de confirmación de compra.
</details>

<details>
  <summary><b>Content Dashboard</b></summary>
    👤Enlace a crear, editar o borrar contenido propio
    👤Muestra todos los contenidos propios y comprados.
</details>

<details>
  <summary><b>Usuaria no registrada</b></summary>

    👤 Puede ver la lista de contenidos ordenada por valoración
    👤 Puede realizar búsquedas por palabras claves o etiquetas
    👤 Puede registrarse

  </details>
  <details>
  <summary><b>Usuaria registrada</b></summary>

    👤 Puede logarse
    👤 Puede recuperar la contraseña
    👤 Puede ver la lista de contenidos ordenada por valoración
    👤 Puede realizar búsquedas por palabras claves o etiquetas
    👤 Puede actualizar su perfil (menos nombre, email y wallet)
    👤 Puede crear contenido
    👤 Puede editar contenido
    👤 Puede eliminar contenido, si no ha sido comprado
    👤 Puede visualizar la lista de contenido creado
    👤 Puede comprar contenido
    👤 Puede visualiza la lista de contenido comprado
    👤 Puede visualizar un contenido comprado
    👤 Puede valorar contenido comprado (sólo 1 vez)
    👤 Puede comentar contenido comprado (sólo 1 vez)
    👤 Puede enviar una notificación de chat a una autora de contenido
    👤Puede visualizar notificaciones de chat sobre algún contenido
    👤 Puede intercambiar mensajes de chat con una autora de contenido, o solicitante

  </details>
  <details>
  <summary><b>Administradora de la aplicación</b></summary>

    🔑 Puede ver la lista de contenidos
    🔑 Puede realizar búsquedas por palabras claves o etiquetas
    🔑 Puede eliminar contenido
    🔑 Puede ver lista de usuarias
    🔑 Puede eliminar una usuaria
    🔑 Puede actualizar una usuaria

  </details>
<details>
  <summary><b>Sistema</b></summary>

    🔧 Actualiza el wallet de la usuaria cuando se registra
    🔧 Actualiza el wallet de la usuaria cuando compra contenido
    🔧 Actualiza el precio del contenido cuando se publica
    🔧 Notifica a la usuaria que no tiene saldo para comprar contenido si el wallet es inferior al precio del contenido
    🔧 Ajusta la valoración del curso con cada valoración de una usuaria
    🔧 Las 4 primeras valoraciones solo contarán como >= a 4.8
    🔧 A partir de la 5ª valoración se hace la media
    🔧 Comunica en tiempo real la valoración del curso
    🔧 Actualiza el precio del contenido cuando alcanza una media de valoración < = 3
    🔧Chequea el contenido para buscar plagios.
    🔧 Puede actualizar una usuaria

  </details>

## 💻Metodologias tecnicas🖱: 
<details>
  <summary><b>Backend</b></summary>
    - NestJS
    - Node.js 
    - MongoDB - MongoAtlas
 </details>

<details>
  <summary><b>Frontend</b></summary>
    - React Vite 
    - Vitest 
    - Utilización de líbreria [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)
 </details>

## 📦Recursos entregables📦: 
 ** 📌[Repositorio de Github] (https://github.com/factoriaf5-p7/ui-uknow-latin-recargado)
 ** 📌[Tablero de trabajo - Trello] (https://trello.com/b/g9HzrXcI/latinfront)
 ** 📌 [Diseño de frontend - Figma] (https://www.figma.com/file/RsR4rcsrYd7RP4oBMicwMR/Untitled?type=design&node-id=0%3A1&mode=design&t=tsrbCK6Soo5ldoyI-1) 
 ** 📌[Presentación del proyecto] (https://www.canva.com/design/DAFqd1clRmM/Zz8vk2pS1bMRdFADWAmyJA/edit)
 ** 📌[Aplicación en despliegue]()

## Equipo de trabajo: 
 ** 👨‍💻Scrum Master: Sebastián Riggio 
 ** 👩‍💻 Product Owner: Evangelina Rodriguez 
 ** 👩‍💻 Development: Huilen Peña 
 ** 👨‍💻 Development: Jesús Fajardo










[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/BUGJLTd5)
