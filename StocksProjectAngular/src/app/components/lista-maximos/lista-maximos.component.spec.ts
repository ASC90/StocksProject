import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaximosComponent } from './lista-maximos.component';

describe('ListaMaximosComponent', () => {
  let component: ListaMaximosComponent;
  let fixture: ComponentFixture<ListaMaximosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaximosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
