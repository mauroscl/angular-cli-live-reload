import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNivel2Component } from './my-nivel2.component';

describe('MyNivel2Component', () => {
  let component: MyNivel2Component;
  let fixture: ComponentFixture<MyNivel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNivel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNivel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
