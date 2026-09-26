import { Component } from '@angular/core';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.page.html',
  styleUrl: './blog-articles.page.scss',
})
export class BlogArticlesPage {
  readonly posts = BLOG_POSTS;
}