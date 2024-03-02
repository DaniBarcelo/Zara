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
