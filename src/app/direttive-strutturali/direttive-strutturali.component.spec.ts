import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettiveStrutturaliComponent } from './direttive-strutturali.component';

describe('DirettiveStrutturaliComponent', () => {
  let component: DirettiveStrutturaliComponent;
  let fixture: ComponentFixture<DirettiveStrutturaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirettiveStrutturaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirettiveStrutturaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
