import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontactosComponent } from './listacontactos.component';

describe('ListacontactosComponent', () => {
  let component: ListacontactosComponent;
  let fixture: ComponentFixture<ListacontactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacontactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
