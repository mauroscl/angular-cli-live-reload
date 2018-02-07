import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNivel3Component } from './my-nivel3.component';

describe('MyNivel3Component', () => {
  let component: MyNivel3Component;
  let fixture: ComponentFixture<MyNivel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNivel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNivel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
