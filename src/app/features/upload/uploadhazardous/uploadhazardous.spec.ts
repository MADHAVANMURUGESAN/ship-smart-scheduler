import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadhazardous } from './uploadhazardous';

describe('Uploadhazardous', () => {
  let component: Uploadhazardous;
  let fixture: ComponentFixture<Uploadhazardous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploadhazardous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadhazardous);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
