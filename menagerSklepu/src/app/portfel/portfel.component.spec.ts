import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfelComponent } from './portfel.component';

describe('PortfelComponent', () => {
  let component: PortfelComponent;
  let fixture: ComponentFixture<PortfelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
