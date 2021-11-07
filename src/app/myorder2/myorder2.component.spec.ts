import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myorder2Component } from './myorder2.component';

describe('Myorder2Component', () => {
  let component: Myorder2Component;
  let fixture: ComponentFixture<Myorder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myorder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myorder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
