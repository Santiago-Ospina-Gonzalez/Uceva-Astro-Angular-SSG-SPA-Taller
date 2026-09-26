import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-about',
  templateUrl: './blog-about.page.html',
  styleUrl: './blog-about.page.scss',
})
export class BlogAboutPage {
  readonly principles = [
    'Explicar decisiones tecnicas con ejemplos concretos.',
    'Medir el rendimiento antes de proponer optimizaciones.',
    'Diseñar componentes que puedan crecer sin perder claridad.',
  ];
}