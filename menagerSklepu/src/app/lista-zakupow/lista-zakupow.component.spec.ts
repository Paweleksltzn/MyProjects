import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZakupowComponent } from './lista-zakupow.component';

describe('ListaZakupowComponent', () => {
  let component: ListaZakupowComponent;
  let fixture: ComponentFixture<ListaZakupowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZakupowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZakupowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
