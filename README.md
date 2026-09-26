# Angular + Astro: SPA vs SSG

Monorepo del taller para comparar una aplicación Angular con arquitectura SPA y una aplicación Astro con generación estática (SSG).

## Repositorio

- GitHub: https://github.com/Santiago-Ospina-Gonzalez/Uceva-Astro-Angular-SSG-SPA-Taller
- Rama integrada en `master`: `feature/blog-spa-ssg`
- Informe de análisis: [documentation/analisis-spa-vs-ssg.md](documentation/analisis-spa-vs-ssg.md)

## Aplicaciones

```text
Client-Angular/    Aplicación Angular SPA
Astro-SSG/         Aplicación Astro SSG
```

## Ejecutar Angular

```bash
cd Client-Angular
npm install
npm run start
```

Abrir: http://localhost:4200/

## Ejecutar Astro

```bash
cd Astro-SSG
npm install
npm run dev
```

Abrir: http://localhost:4321/

> Astro utiliza `npm run dev`; no tiene un script `npm run start`.

## Vistas del blog

Las mismas vistas están implementadas en Angular y Astro:

| Vista | Angular | Astro |
| --- | --- | --- |
| Portada | `/blog` | `/blog` |
| Artículos | `/blog/articles` | `/blog/articles` |
| Sobre el blog | `/blog/about` | `/blog/about` |

## Builds de producción

```bash
cd Client-Angular
npm run build

cd ../Astro-SSG
npm run build
```

Resultados medidos el 26 de septiembre de 2026:

| Aplicación | Arquitectura | Tiempo de build | Tamaño de `dist` |
| --- | --- | ---: | ---: |
| Angular | SPA | 5.82 s | 1,051,469 bytes |
| Astro | SSG | 5.28 s | 649,397 bytes |

Astro generó un build aproximadamente 38.08% menor que Angular.

## Pruebas Angular

```bash
cd Client-Angular
npm test -- --runInBand
```

Resultado validado:

```text
Test Suites: 13 passed, 13 total
Tests:       43 passed, 43 total
```

Astro no tiene Jest configurado en el proyecto base. Su validación se realiza mediante `npm run build`, que genera correctamente las rutas HTML estáticas.

## Documentación adicional

- [Análisis completo SPA vs SSG](documentation/analisis-spa-vs-ssg.md)
- [README de evidencias](../Evidencias_Punto1/README.md)
