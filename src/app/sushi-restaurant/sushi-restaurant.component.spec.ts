import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiRestaurantComponent } from './sushi-restaurant.component';

describe('SushiRestaurantComponent', () => {
  let component: SushiRestaurantComponent;
  let fixture: ComponentFixture<SushiRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SushiRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
