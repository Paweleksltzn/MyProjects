import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyPrzedmiotuComponent } from './szczegoly-przedmiotu.component';

describe('SzczegolyPrzedmiotuComponent', () => {
  let component: SzczegolyPrzedmiotuComponent;
  let fixture: ComponentFixture<SzczegolyPrzedmiotuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyPrzedmiotuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyPrzedmiotuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
