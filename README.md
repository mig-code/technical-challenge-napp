# Technical Challenge

[![Netlify Status](https://api.netlify.com/api/v1/badges/552f5694-863b-40f1-bed5-4e888534eb12/deploy-status)](https://app.netlify.com/sites/technical-challenge-napp/deploys)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mig-code_technical-challenge-napp&metric=coverage)](https://sonarcloud.io/summary/new_code?id=mig-code_technical-challenge-napp)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=mig-code_technical-challenge-napp&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=mig-code_technical-challenge-napp)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=mig-code_technical-challenge-napp)](https://sonarcloud.io/summary/new_code?id=mig-code_technical-challenge-napp)

## Descripción

Prueba técnica que consiste en la creación de una mini-aplicación para comprar dispositivos moviles mediante una SPA en REACT con Javascript.

Current deployment: https://technical-challenge-napp.netlify.app/

## Metodología de trabajo

La gestión del proyecto la he realizado con Trello.

Para asegurar la calidad del código he utilizado SonarCloud y testing con Jest.

El depliegue lo he hecho en Netlify apoyándome en Github Actions.

## Estructura de carpetas

    src
    ├── core
        ├── components
        ├── context
        ├── hooks
        ├── services
    ├── features
        ├── product.details
        ├── product.list
    ├── mocks
    ├── sass
    ├── utils

## Instalación

Para instalar el proyecto, se debe clonar el repositorio y ejecutar el comando `npm install`. ( Se requiere tener instalado Node.js)

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

#### `npm start`

Para ejecutar la aplicación en modo desarrollo.

#### `npm run build`

Para construir la aplicación para producción en la carpeta `build`.

#### `npm run test`

Para ejecutar los tests en modo watch.

#### `npm run test:prod`

Para ejecutar los tests en modo producción.

#### `npm run lint`

Para ejecutar el linter y corregir los errores.

## Autor

Miguel P.gomez

-   [hola@miguelpg.com](hola@miguelpg.com)
-   [LinkedIn](https://www.linkedin.com/in/mig-code//)
