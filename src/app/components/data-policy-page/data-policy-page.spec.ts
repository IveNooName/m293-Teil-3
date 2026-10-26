import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataPolicyPage } from './data-policy-page';

describe('DataPolicyPage', () => {
  let component: DataPolicyPage;
  let fixture: ComponentFixture<DataPolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DataPolicyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
