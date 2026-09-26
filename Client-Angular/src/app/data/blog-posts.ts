export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'spa-vs-ssg',
    title: 'SPA vs SSG: dos caminos para construir la web',
    excerpt: 'Una mirada practica a como Angular y Astro entregan experiencias web diferentes.',
    category: 'Arquitectura',
    readTime: '6 min',
    publishedAt: '12 de septiembre de 2026',
  },
  {
    slug: 'rendimiento-frontend',
    title: 'Rendimiento frontend: medir antes de optimizar',
    excerpt: 'Las metricas que ayudan a tomar decisiones tecnicas con datos y no con suposiciones.',
    category: 'Rendimiento',
    readTime: '4 min',
    publishedAt: '8 de septiembre de 2026',
  },
  {
    slug: 'componentes-reutilizables',
    title: 'Componentes reutilizables que conservan su contexto',
    excerpt: 'Como diseñar piezas pequenas que mantengan claridad entre equipos y proyectos.',
    category: 'Frontend',
    readTime: '5 min',
    publishedAt: '2 de septiembre de 2026',
  },
];