import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myorder3Component } from './myorder3.component';

describe('Myorder3Component', () => {
  let component: Myorder3Component;
  let fixture: ComponentFixture<Myorder3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myorder3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myorder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
