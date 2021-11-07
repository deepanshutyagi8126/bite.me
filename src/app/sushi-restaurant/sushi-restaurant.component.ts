import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-sushi-restaurant',
  templateUrl: './sushi-restaurant.component.html',
  styleUrls: ['./sushi-restaurant.component.css']
})
export class SushiRestaurantComponent implements OnInit {
  value9: number = 0;
  highValue9: number = 60;
  value10: number = 0;
  highValue10: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit(): void {
  }

}
