import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.css']
})
export class RestaurantsDetailsComponent implements OnInit {
	change(value: number): void {
        console.log(value);
    }
  	constructor() { }

  	ngOnInit() {



  	}

}
