import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHttpComponent } from './angular-http.component';

describe('AngularHttpComponent', () => {
  let component: AngularHttpComponent;
  let fixture: ComponentFixture<AngularHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
