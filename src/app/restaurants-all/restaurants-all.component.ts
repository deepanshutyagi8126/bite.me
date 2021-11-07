import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-restaurants-all',
  templateUrl: './restaurants-all.component.html',
  styleUrls: ['./restaurants-all.component.css']
})
export class RestaurantsAllComponent implements OnInit {
  value3: number = 0;
  highValue3: number = 60;
  value4: number = 0;
  highValue4: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit(): void {
  }

}
