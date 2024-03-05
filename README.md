# Proyecto Marvel Zara

Este proyecto consiste en una aplicación web que utiliza la API de Marvel para mostrar información sobre los personajes de los cómics de Marvel. Se ha tomado la decisión de diseñar la API de CHARACTERS para devolver TODA la información necesaria para cada uno de los personajes. 

Se consideró la posibilidad de que la API devolviera solo la información necesaria para mostrar el listado, pero esto requeriría una llamada extra a la API cada vez que se quisiera ver la información de un personaje nuevo. Por lo tanto, se ha optado por hacer que la API devuelva toda la información necesaria para cada personaje, y que el cliente se encargue de mostrar solo la información necesaria, reduciendo así notablemente la cantidad de llamadas a la API.

## Estructura del Proyecto

```
proyecto-marvel-zara/
├── backend-zara/ # Código del servidor Node.js
│ ├── src/
│ └── package.json
├── frontend-zara/ # Código de la aplicación React
│ ├── public/
│ ├── src/
│ └── package.json
├── README.md # Documentación del proyecto
└── package.json # Archivo principal de configuración del proyecto
```

## Cómo Ejecutar

### Backend
Para ejecutar el servidor Node.js, sigue estos pasos:
1. Navega al directorio del backend: `cd backend-zara`
2. Installa las dependencias: `npm install`
3. Inicia el servidor: `npm start`

### Frontend
Para ejecutar la aplicación React, sigue estos pasos:
1. Navega al directorio del frontend: `cd frontend-zara`
2. Installa las dependencias: `npm install`
3. Inicia la aplicación: `npm start`

### Versión de producción minimizada
Para obtener una versión de produccion minimizada:
1. Navega al directorio del frontend: `cd frontend-zara`
2. Construye la aplicación: `npm run build`

## Notas

1. La API de marvel para el filtrado de nombres, solo permite el filtrado por nombre completo o por comienzo de string. Para la búsqueda en la pantalla de inicio, se ha usado este parámetro de la API. Al haber guardado la información de los personajes favoritos en el contexto de la aplicación, en la búsqueda de la pantalla de favoritos, se permite la búsqueda por contención de nombre, ya que esta búsqueda se hace de forma local y no depende de la API
2. Para el formateo de código se ha utilizado el formateo automático integrado en el IDE VSCode
3. Ante la falta del recurso del "corazón relleno blanco" a la hora de hacer "hover" sobre una tarjeta de personaje, si el personaje está marcado como favorito, el corazón se vuelve "invisible"