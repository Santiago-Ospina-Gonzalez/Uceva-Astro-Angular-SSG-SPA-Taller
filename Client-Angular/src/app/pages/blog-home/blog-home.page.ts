import { Component } from '@angular/core';
import { BLOG_POSTS } from '../../data/blog-posts';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.page.html',
  styleUrl: './blog-home.page.scss',
})
export class BlogHomePage {
  readonly featuredPost = BLOG_POSTS[0];
  readonly recentPosts = BLOG_POSTS.slice(1);
}