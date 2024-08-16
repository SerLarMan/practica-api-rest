# Librería Api Rest

Proyecto api rest que se conecta a una base de datos MongoDB e interactua con dos modelos:

- BookStore
- Book

## Instalación

Este proyecto requiere [Node.js](https://nodejs.org/) v10+ para funcionar.

Instala las dependencias y las dependencias de desarrollo.

```sh
cd practica-api-rest
npm i
```

Para poblar la colección de libros.

```sh
npm run seed
```

Para arrancar el servidor en localhost en el puerto 3000.

```sh
npm run start
```

## Endpoints

Como esta indicado antes, esta api trabaja con dos modelos.
A continuación se listaran las rutas y los endpoints para poder interactuar con ellos.

### Book

```sh
127.0.0.1:3000/books
```

| Método | Ruta | Cuerpo | Descripción |
| ------ | ------ | ------ | ------ |
| GET | / | | Obtiene todos los libros |
| GET | /:id | | Obtiene el libro seleccionado por la id |
| POST | / | Objeto Book | Crea un libro nuevo |
| PUT | /:id | Objeto Book | Actualiza un libro por su id |
| DELETE | /:id | | Borra un libro por su id |

### Bookstore

```sh
127.0.0.1:3000/bookstores
```

| Método | Ruta | Cuerpo | Descripción |
| ------ | ------ | ------ | ------ |
| GET | / | | Obtiene todas las librerías |
| GET | /:id | | Obtiene la librería seleccionada por la id |
| POST | / | Objeto Book | Crea una librería nueva |
| PUT | /:id | Objeto Book | Actualiza una librería por su id |
| DELETE | /:id | | Borra una librería por su id |

## Licencia

MIT
