import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterLink } from './footer-link';

describe('FooterLink', () => {
  let component: FooterLink;
  let fixture: ComponentFixture<FooterLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
