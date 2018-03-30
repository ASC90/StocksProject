import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaxComponent } from './list-max.component';

describe('ListMaxComponent', () => {
  let component: ListMaxComponent;
  let fixture: ComponentFixture<ListMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
