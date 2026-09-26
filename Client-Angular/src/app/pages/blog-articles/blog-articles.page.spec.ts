import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogArticlesPage } from './blog-articles.page';

describe('BlogArticlesPage', () => {
  let component: BlogArticlesPage;
  let fixture: ComponentFixture<BlogArticlesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BlogArticlesPage] }).compileComponents();
    fixture = TestBed.createComponent(BlogArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia mostrar todos los articulos publicados', () => {
    expect(component.posts).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('article')).toHaveLength(3);
  });
});