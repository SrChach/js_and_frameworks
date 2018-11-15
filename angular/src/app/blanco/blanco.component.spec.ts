import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancoComponent } from './blanco.component';

describe('BlancoComponent', () => {
  let component: BlancoComponent;
  let fixture: ComponentFixture<BlancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
