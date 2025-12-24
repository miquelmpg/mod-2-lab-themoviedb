# 🎬 Ejercicio React – The Movie Database (TMDB)
Este proyecto consiste en el desarrollo de una aplicación en React que consume la API de The Movie Database (TMDB) para mostrar un listado de películas, acceder al detalle de cada una y permitir al usuario guardar películas favoritas utilizando Local Storage.

Esta demo es únicamente **ilustrativa**. No es necesario implementar todas sus funcionalidades (por ejemplo, todavía no hemos visto cómo realizar login y registro).
Su objetivo es servir como **referencia** para que tengáis una idea de lo que podéis llegar a construir. Os recomendamos avanzar **paso a paso** y, a medida que os sobre tiempo, experimentar con las props de los componentes para ir mejorando el producto.
No os centréis en las categorías del ejemplo; el objetivo principal del ejercicio es mostrar las películas en formato grid y permitir la navegación al detalle de cada película.

DEMO: https://iron-movies.netlify.app

## 🧩 Objetivo del ejercicio
- Consumo de APIs externas
- Separación de responsabilidades (servicios, componentes, páginas)
- Transformación de datos
- Navegación entre vistas
- Persistencia de información en el navegador (local storage)

## 🔑 Configuración de la API de TMDB
- Crear una cuenta en [The Movie Database](https://www.themoviedb.org)
- Obtener una [API Key](https://www.themoviedb.org/settings/api) (es gratis)
- Crear un archivo .env en la raíz del proyecto:

```
VITE_TMDB_BASE_API_URL='https://api.themoviedb.org/3'
VITE_TMDB_BASE_IMAGES_URL='https://image.tmdb.org/t/p/original'
VITE_TMDB_API_KEY='tu_api_key_aquí'
```

## 🚀 Funcionalidades

### Servicio de comunicación con TMDB
Implementar un servicio que se comunique con la API de TMDB.
El servicio debe permitir:
- Obtener un listado de películas.
- Obtener el detalle de una película a partir de su identificador.

### Transformación del modelo de datos
La respuesta original de TMDB debe transformarse para trabajar solo con los campos necesarios:
- id
- nombre / título
- poster
- descripción
- categorías / géneros
- Evitar usar directamente el modelo devuelto por la API en los componentes.

### Listado de películas
Mostrar las películas en la página principal en formato grid.
Cada tarjeta de película debe mostrar al menos:
- Póster
- Título

### Página de detalle
Al hacer clic en una película del listado:
- Navegar a una página de detalle.
- Mostrar información ampliada de la película seleccionada.

### Gestión de favoritos
Permitir marcar/desmarcar películas como favoritas.
Las películas favoritas deben guardarse en Local Storage.
Combinar información de TMDB con información propia (estado de favorito).
Los favoritos deben mantenerse aunque se recargue la página.