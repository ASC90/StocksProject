import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheListComponent } from './cache-list.component';

describe('CacheListComponent', () => {
  let component: CacheListComponent;
  let fixture: ComponentFixture<CacheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
