# Analisis SPA vs SSG

## Alcance

Se implementaron las mismas tres vistas de un blog tecnologico en las dos aplicaciones del monorepo:

- `/blog`: portada con articulo destacado y articulos recientes.
- `/blog/articles`: listado completo de articulos.
- `/blog/about`: principios editoriales del blog.

Angular conserva el enfoque SPA del proyecto base. Astro genera HTML estatico para las mismas rutas.

## Builds de produccion

Los builds se generaron el 26 de septiembre de 2026 desde cada aplicacion:

```bash
cd Client-Angular
npm run build

cd ../Astro-SSG
npm run build
```

| Aplicacion | Arquitectura | Directorio | Tamano total |
| --- | --- | --- | ---: |
| Angular | SPA | `Client-Angular/dist` | 1,051,469 bytes (1,026.83 KB) |
| Astro | SSG | `Astro-SSG/dist` | 649,397 bytes (634.18 KB) |

En esta ejecucion el build de Angular fue aproximadamente 1.62 veces mas grande que el de Astro.
La medicion incluye todos los archivos generados dentro de cada directorio `dist`.

## Tiempo de carga

El tiempo de carga depende del servidor, la red, el navegador y la cache. La diferencia arquitectonica
principal es el trabajo que ocurre antes de mostrar contenido:

- Angular entrega un shell de aplicacion y descarga JavaScript para iniciar la SPA. El navegador
  ejecuta Angular y luego resuelve la vista mediante el router.
- Astro entrega HTML ya generado para cada ruta. El navegador puede pintar el contenido sin iniciar
  un runtime completo de JavaScript para estas vistas estaticas.

Para una comparacion reproducible se debe ejecutar Lighthouse sobre `/blog`, `/blog/articles` y
`/blog/about` en ambas aplicaciones, usando el mismo navegador, red y modo de compilacion.

## Diferencias arquitectonicas

### SPA con Angular

- La navegacion ocurre principalmente en el cliente despues de descargar el shell.
- Es adecuada para interacciones complejas, estados persistentes y experiencias de aplicacion.
- El JavaScript inicial y el arranque del framework aumentan el costo de la primera carga.
- El contenido se puede actualizar sin regenerar HTML estatico, porque la vista se construye en el navegador.

### SSG con Astro

- Las paginas se generan durante el build y se sirven como archivos HTML.
- Es adecuada para blogs, documentacion y contenido que cambia con poca frecuencia.
- Tiene menor cantidad de JavaScript necesario para mostrar contenido estatico.
- Un cambio de contenido requiere regenerar y publicar el build.

## Conclusion tecnica

Para este blog tecnologico, SSG con Astro resulta mas eficiente en tamano de salida y en el trabajo
necesario para mostrar contenido inicial. La medicion realizada produjo 649,397 bytes frente a
1,051,469 bytes de Angular.

Angular sigue siendo una mejor eleccion cuando el producto necesita interacciones intensivas,
autenticacion, formularios complejos o estado compartido entre muchas vistas. La eleccion depende
del caso de uso: Astro favorece contenido estatico y rendimiento inicial; Angular favorece una
experiencia de aplicacion rica en el cliente.

## Pruebas

El cliente Angular mantiene la suite Jest del proyecto y agrega una prueba para cada vista nueva:

```bash
cd Client-Angular
npm test -- --runInBand
```

Resultado de la ejecucion: `13` suites, `43` pruebas aprobadas.