import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionComponent } from './induction.component';

describe('InductionComponent', () => {
  let component: InductionComponent;
  let fixture: ComponentFixture<InductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InductionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
