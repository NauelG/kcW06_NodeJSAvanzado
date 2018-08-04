# NodePOP - api REST

![nodeJS](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

Práctica del módulo de Fundamentos de Backend con NodeJS, Express y MongoDB de **KeepCoding**.

## Sobre la API

Esta API ha sido creada para el Bootcamp Web de KeepCoding. Consiste en un backend construido con Express, NodeJS y MongoDB.

Todas las consultas a los anuncios almacenados se pueden hacer mediante dos vias:
- Consultas directas por url, que devolveran una visa con los anuncios filtrados.
- Consultas a la api como servicio, que devolverá un fichero JSON.

### Parámetros de consulta

Ambas vías de consulta admiten los mismos parámetros. Un ejemplo de consulta seria:
```
://nombrededominio/api/anuncios?name=reloj&tags=lifestyle&type=venta&range=10-100&limit=3&skip=3&sort=nombre
```

Los parámetros aceptados son:
- **Name**: El nombre de un artículo. No distingue minúsculas de mayúsculas.
- **Tags**: El nombre de un tag o categoría.
- **Type**: Venta o Compra según el tipo de anuncio.
- **Range**: Precio mínimo y máximo separado por un guión.
- **Limit**: Número máximo de anuncios a devolver.
- **Skip**: Número de anuncios a saltar. En caso de paginación.
- **Sort**: Campo por el cuál queremos ordenar (nombre, precio). En negativo si querémos un orden descendente.

## Sobre su desarrollo

### Instalación

Para inciar la aplicación instala sus dependencias:
```shell
$ npm install
```

Con el módulo `dotenv` de node, las variables de entorno se cargan dinámicamente. Copia el archivo `.env.example` en `.env` y revisa los valores.

## Base de datos
Para inicializar la base de datos con documentos de prueba ejecuta:
```shell
$ npm run install-db
```

