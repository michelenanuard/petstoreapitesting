# Pruebas de API en Swagger Petstore

Este proyecto contiene pruebas automatizadas realizadas con Cypress en la API de Swagger Petstore (https://petstore.swagger.io/). Las pruebas incluyen escenarios para agregar, consultar y actualizar mascotas en la tienda de mascotas.

## Configuración del Proyecto

1. **Clonar el Repositorio**: Clona este repositorio en tu computadora:

   ```bash
   https://github.com/michelenanuard/petstoreapitesting

## Instala las dependecias:
   
   ```bash
npm install
```

## Estructura del proyecto:

Pruebas de API
A continuación, se describen las pruebas de API incluidas en este proyecto:

1. Añadir una Mascota a la Tienda
Esta prueba realiza una solicitud POST para agregar una mascota a la tienda utilizando los datos proporcionados en el cuerpo de la solicitud.

2. Consultar Mascota Añadida por ID
Esta prueba consulta una mascota por su ID utilizando una solicitud GET y verifica que la respuesta contenga el ID correcto.

3. Actualizar el Nombre y el Estado de la Mascota
Esta prueba actualiza el nombre y el estado de una mascota a "sold" utilizando una solicitud PUT y verifica que la respuesta refleje los datos actualizados.

4. Consultar la Mascota Modificada por Estado
Esta prueba consulta mascotas por estado "sold" utilizando una solicitud GET y verifica que todas las mascotas en la respuesta tengan el estado "sold".

## Ejecutar las Pruebas:

   ```bash
npx cypress open
```