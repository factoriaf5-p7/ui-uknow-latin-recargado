# U-KNOW: La plataforma de aprendizaje cooperativo. Paso 3 Diseño y Desarrollo del UI

## Introducción

La aplicación U-KNOW está desarrollándose a buen ritmo y no vemos el momento de lanzarla al mercado. Pero antes, necesitamos que trabajéis la parte del Front. Hemos oído hablar de las aplicaciones single-page (SPA) y eso es lo que queremos. Una aplicación SPA que se conecte a la API, que ya habéis desarrollado. Buscamos una interfaz de usuario dinámica y atractiva que pueda adaptarse a cualquier dispositivo. El interfaz debe mostrar personalidad, necesitamos un logo que se identifique con la aplicación y que capte el mensaje de cooperación que es fundamental en esta aplicación. Si también fuera progresiva (PWA) sería la guinda sobre el pastel.

## Requerimientos UI

A los requerimientos que se lanzaron para la parte de back-end, listados más abajo, habría que añadir algunos requerimientos de navegación:

<details>
  <summary><b>Hero</b></summary>

  - La aplicación comienza con un **hero** que ocupa todo el view-port. La imagen del hero debe tener una cierta animación antes de mostrar un enlace a "ver contenidos" que dirigirá a la página principal o home.
</details>
<details>
  <summary><b>Home</b></summary>

  - La **home**, debe constar de:
    - Una **barra de navegación** superior que sin estado mostrará:
      - Un logo con el nombre de la app
      - Un avatar

      - Comportamiento de la barra de navegación:
        - Al clicar el logo se navega a la home
        - Al clicar el avatar:
          - si no hay usuario logado navega a la página de login/register
          - si el usuario está logado debe mostrar un menú con los elementos: profile, contents, logout. El avatar, así mismo debe mostrar el nombre del usuario cuando está logado.
      - Aspecto:
        - En modo móvil, la barra de navegación será de tipo bottom navigation, con todas las opciones del menú:
          ![bottom-navigation](https://lh3.googleusercontent.com/14jax4TqtGJ1R7uteNETMHtrB4_83FOVLCsLW3VxWh17Mle2RiCPiUwPgN0hEXqkCr-281geh88fDMuEZyGVTyhZ_j8hO9RHElEa=w1064-v0)
        - En modo laptop la barra será muy minimalista y deberá desaparecer con el scroll-down del contenido y aparecer con el scroll-up.
    - Una **caja de búsqueda de contenidos** que filtrará en tiempo real la lista desplegada
    - Una **lista de contenidos** que mostrará una "card" con la información minima del contenido. La lista tendrá scroll infinito y debe cargarse de forma diferida. Cada tarjeta mostrará dos botones: "Ver más" y Comprar.
      - "Ver más": muestra un modal con una ampliación de la información y un enlace a ver la información completa con comentarios (opcional)
      - Comprar: chequea si hay saldo y muestra pantalla de confirmación de compra.

  </details>
<details>
  <summary><b>Content Dashboard</b></summary>
    - Enlace a crear, editar o borrar contenido propio
    - Muestra todos los contenidos propios y comprados.
</details>
<details>
  <summary><b>Administration</b></summary>
</details>

<details>
  <summary><b>Usuaria no registrada</b></summary>

  - Puede ver la lista de contenidos ordenada por valoración
  - Puede realizar búsquedas por palabras claves o etiquetas
  - Puede registrarse

  </details>
  <details>
  <summary><b>Usuaria registrada</b></summary>

  - Puede logarse
  - Puede recuperar la contraseña
  - Puede ver la lista de contenidos ordenada por valoración
  - Puede realizar búsquedas por palabras claves o etiquetas
  - Puede actualizar su perfil (menos nombre, email y wallet)
  - Puede crear contenido
  - Puede editar contenido
  - Puede eliminar contenido, si no ha sido comprado
  - Puede visualizar la lista de contenido creado
  - Puede comprar contenido
  - Puede visualiza la lista de contenido comprado
  - Puede visualizar un contenido comprado
  - Puede valorar contenido comprado (sólo 1 vez)
  - Puede comentar contenido comprado (sólo 1 vez)
  - Puede enviar una notificación de chat a una autora de contenido
  - Puede visualizar notificaciones de chat sobre algún contenido
  - Puede intercambiar mensajes de chat con una autora de contenido, o solicitante

  </details>
  <details>
  <summary><b>Administradora de la aplicación</b></summary>

  - Puede ver la lista de contenidos
  - Puede realizar búsquedas por palabras claves o etiquetas
  - Puede eliminar contenido
  - Puede ver lista de usuarias
  - Puede eliminar una usuaria
  - Puede actualizar una usuaria

  </details>

  <details>
  <summary><b>Sistema</b></summary>

  - Actualiza el wallet de la usuaria cuando se registra
  - Actualiza el wallet de la usuaria cuando compra contenido
  - Actualiza el precio del contenido cuando se publica
  - Notifica a la usuaria que no tiene saldo para comprar contenido si el wallet es inferior al precio del contenido
  - Ajusta la valoración del curso con cada valoración de una usuaria
    - Las 4 primeras valoraciones solo contarán como >= a 4.8
    - A partir de la 5ª valoración se hace la media
    - Comunica en tiempo real la valoración del curso
  - Actualiza el precio del contenido cuando alcanza una media de valoración < = 3
  - Chequea el contenido para buscar plagios.
  - Puede actualizar una usuaria

  </details>

## Requerimientos técnicos
- Desarrollo con React Vite + Vitest (intentad utilizar TDD para el desarrollo)
- Utilización de la librería [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/), implementación en este [repositorio](https://github.com/factoriaf5-p7/prueba-markdown.git).
- Buenas prácticas de arquitectura y programación.

## Modalidades pedagógicas

- Los equipos serán de entre 4 y 5 personas.
- El plazo para la realización de este proyecto es de unas tres semanas, se presenta el día 4 de Agosto.
- El trabajo debe organizarse en equipo a través de kanban y ceremonias SCRUM.
- Se hará una demo preliminar del producto (aunque no esté acabado) al final del primer sprint (31 Agosto).
- Se hará una demo final del producto al final del segundo sprint.
- El diseño corre a cargo del equipo.

## Criterios de rendimiento

- El resultado final debe tener los elementos requeridos y las funcionalidades descritas en las historias de usuario de la parte de backend.
- Los commits del proyecto deben estar asociados a una issue de Github
- Cada issue debe contener una historia de usuario.
- La presentación habla de manera concisa sobre los obstáculos utilizando términos técnicos
- El desarrollo apoya consistentemente la información compartida oralmente.

## Modalidades de evaluación

- La presentación de la demostración frente a los formadores se completará con una sesión de preguntas / respuestas para justificar las decisiones técnicas. Feedback mediante pull-request
- Tras la entrega del proyecto habrá una sesión de autoevaluación y de evaluación de los miembros del proyecto.

## Entregables
- Aplicación funcionando en un entorno de producción. Valorable algún proceso de CI/CD.
- Repositorio de GitHub con el código de la aplicación y fichero Readme.md; con enlaces a kanban, figma... Valorable índice de contenidos en el readme.
- Presentación

## Competencias a validar

  <details>
  <summary><b>Maquetación web</b></summary>

- La maquetación tiene en cuenta las características funcionales descritas en los casos de uso o historias de usuario
- La secuencia de pantallas se formaliza mediante un diagrama
- La maquetación y la secuencia de pantallas son validadas por el usuario
- La maquetación respeta la carta gráfica de la empresa v es adecuada con la experiencia del usuario y el dispositivo al que va dirigido
- La maquetación respeta los principios de seguridad de una interfaz de usuario
- La maquetación tiene en cuenta los requisitos de seguridad específicos de la aplicación
- El contenido de la maquetación está escrito, en castellano o en inglés, de manera adaptada al interlocutor y sin errores

</details>

  <details>
  <summary><b>Desarrollo de una interfaz de usuario web dinámica y adaptable</b></summary>

- Las páginas web respetan la carta gráfica de la empresa y están alineadas con la experiencia del usuario, incluyendo la experiencia móvil.
- La arquitectura de la aplicación se ajusta a las buenas prácticas de desarrollo y seguridad de las aplicaciones web
- La aplicación web está optimizada para dispositivos móviles
- El código fuente está documentado o autodocumentado
- La aplicación web está publicada en un servidor
- Los test garantizan que las páginas web cumplen los requisitos descritos en las especificaciones
- Los test de seguridad siguen un método reconocido por la profesión
- El tema de la búsqueda se expresa con precisión en castellano o inglés
- La documentación técnica relacionada con las tecnologías asociadas, en castellano o en inglés, se entiende (sin interpretaciones erróneas).
- El proceso de búsqueda permite resolver un problema técnico o implementar una nueva funcionalidad
- El monitoreo de vulnerabilidades conocidas permite identificar y corregir vulnerabilidades potenciales
- Se comparten los resultados de la búsqueda, oralmente o por escrito, con la pareja o equipo.

</details>