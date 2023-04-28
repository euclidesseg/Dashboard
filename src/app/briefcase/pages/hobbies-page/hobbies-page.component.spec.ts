import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPageComponent } from './hobbies-page.component';

describe('HobbiesPageComponent', () => {
  let component: HobbiesPageComponent;
  let fixture: ComponentFixture<HobbiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
