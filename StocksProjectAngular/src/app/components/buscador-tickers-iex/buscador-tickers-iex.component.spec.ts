import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTickersIexComponent } from './buscador-tickers-iex.component';

describe('BuscadorTickersIexComponent', () => {
  let component: BuscadorTickersIexComponent;
  let fixture: ComponentFixture<BuscadorTickersIexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorTickersIexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorTickersIexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
