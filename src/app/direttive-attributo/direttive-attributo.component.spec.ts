import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettiveAttributoComponent } from './direttive-attributo.component';

describe('DirettiveAttributoComponent', () => {
  let component: DirettiveAttributoComponent;
  let fixture: ComponentFixture<DirettiveAttributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirettiveAttributoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirettiveAttributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
