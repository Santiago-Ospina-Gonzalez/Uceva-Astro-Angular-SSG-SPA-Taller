import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogAboutPage } from './blog-about.page';

describe('BlogAboutPage', () => {
  let component: BlogAboutPage;
  let fixture: ComponentFixture<BlogAboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BlogAboutPage] }).compileComponents();
    fixture = TestBed.createComponent(BlogAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia mostrar los tres principios editoriales', () => {
    expect(component.principles).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('li')).toHaveLength(3);
  });
});