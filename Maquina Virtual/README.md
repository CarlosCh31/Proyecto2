# BiesVM

BiesVM es una máquina virtual personalizada que utiliza un parser generado con ANTLR 4.13.2 y JSDoc para la documentación del código. 
Este proyecto permite ejecutar archivos `.basm` con instrucciones específicas que se interpretan dentro de la máquina virtual.

## Requisitos

Para ejecutar el proyecto necesitas lo siguiente:

- ANTLR 4.13.2
- Node.js
- JSDoc

## Instalación

1. **Instala las dependencias**:

    En la termina, ejecuta el siguiente comando para instalar las dependencias globales:

    ``
    npm install
    ``

2. **Genera el parser con ANTLR**:

    Una vez instaladas las dependencias, ejecuta el siguiente comando para generar el parser a partir de las gramaticas definidas:

    ``
    npm run generate-parser
    ``
## Ejecución

Para ejecutar el proyecto con un archivo `.basm`, utiliza el siguiente comando en la terminal:

``
biesVM archivo.basm
``

## Documentación

Para generar la documentacion del proyecto utilizamos el siguiente comando:

``
npm run doc
``