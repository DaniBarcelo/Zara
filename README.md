Decisiones tomadas: La API de CHARACTERS devuelve TODA la información necesaria para cada uno de los personajes.
Se podría haber hecho de tal manera que solo devolviese la información necesaria para mostrar el listado, pero de esa manera, habría que hacer una llamada extra a la API cada vez que se quisiera ver 
la informacion de un personaje nuevo. Por lo tanto, se ha decidido que la API devuelva toda la información necesaria para cada personaje, y que el cliente se encargue de mostrar solo la información necesaria,
reduciendo notablemente la cantidad de llamadas a la API.

Estructura:
proyecto-marvel-zara/
├── backend-zara/          # Código del servidor Node.js
│   ├── src/
│   └── package.json
├── frontend-zara/         # Código de la aplicación React
│   ├── public/
│   ├── src/
│   └── package.json
├── README.md         # Documentación del proyecto
└── package.json      # Archivo principal de configuración del proyecto

COMO EJECUTAR:
-Backend: cd backend-zara && npm start
-Frontend: cd frontend-zara && npm start