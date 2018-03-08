import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzedmiotyComponent } from './przedmioty.component';

describe('PrzedmiotyComponent', () => {
  let component: PrzedmiotyComponent;
  let fixture: ComponentFixture<PrzedmiotyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzedmiotyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzedmiotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
