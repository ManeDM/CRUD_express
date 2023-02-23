<h1>CRUD con EXPRESS || MONGODB || NODE.JS</h1>

<p>Este proyecto es una base de datos de películas creada utilizando Express.js, Node.js, MongoDB Atlas y Postman.</p>

<h2>Instalación</h2>

<ol>
  <li>Clona el repositorio: <code>git clone https://github.com/tu-usuario/tu-proyecto.git</code></li>
  <li>Instala las dependencias: <code>npm install</code></li>
  <li>Crea un archivo <code>.env</code> con las variables de entorno necesarias para conectarte a tu base de datos de MongoDB Atlas:</li>
</ol>

<pre><code>MONGODB_URI=tu-url-de-mongodb-atlas</code></pre>

<ol start="4">
  <li>Inicia el servidor: <code>npm start</code></li>
</ol>

<h2>Uso</h2>
<p>Puedes utilizar Postman para hacer peticiones a la API. Aquí te dejo algunos ejemplos:</p>

<h3>Obtener todas las películas</h3>
<p><code>GET /peliculas</code></p>

<h3>Obtener una película por ID</h3>
<p><code>GET /peliculas/:id</code></p>

<h3>Crear una nueva película</h3>
<p><code>POST /peliculas</code></p>

