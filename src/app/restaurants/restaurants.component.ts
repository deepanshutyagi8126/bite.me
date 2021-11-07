import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  value5: number = 0;
  highValue5: number = 60;
  value6: number = 0;
  highValue6: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit(): void {
  }

}
