import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximoHistoricoComponent } from './maximo-historico.component';

describe('MaximoHistoricoComponent', () => {
  let component: MaximoHistoricoComponent;
  let fixture: ComponentFixture<MaximoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
