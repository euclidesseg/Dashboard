import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationsPageComponent } from './motivations-page.component';

describe('MotivationsPageComponent', () => {
  let component: MotivationsPageComponent;
  let fixture: ComponentFixture<MotivationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
