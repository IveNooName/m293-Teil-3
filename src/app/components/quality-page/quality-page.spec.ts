import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualityPage } from './quality-page';

describe('QualityPage', () => {
  let component: QualityPage;
  let fixture: ComponentFixture<QualityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QualityPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
