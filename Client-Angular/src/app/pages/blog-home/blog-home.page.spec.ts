import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogHomePage } from './blog-home.page';

describe('BlogHomePage', () => {
  let component: BlogHomePage;
  let fixture: ComponentFixture<BlogHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear la pagina y mostrar el articulo destacado', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('SPA vs SSG');
  });
});