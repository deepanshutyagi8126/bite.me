import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteryourcodeComponent } from './enteryourcode.component';

describe('EnteryourcodeComponent', () => {
  let component: EnteryourcodeComponent;
  let fixture: ComponentFixture<EnteryourcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteryourcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteryourcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
