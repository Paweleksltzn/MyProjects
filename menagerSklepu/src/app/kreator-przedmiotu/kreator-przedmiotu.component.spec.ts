import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreatorPrzedmiotuComponent } from './kreator-przedmiotu.component';

describe('KreatorPrzedmiotuComponent', () => {
  let component: KreatorPrzedmiotuComponent;
  let fixture: ComponentFixture<KreatorPrzedmiotuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreatorPrzedmiotuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreatorPrzedmiotuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
