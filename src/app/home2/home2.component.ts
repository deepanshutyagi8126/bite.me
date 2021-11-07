import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animationFrameScheduler } from 'rxjs';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  value: number = 0;
  highValue: number = 60;
  value2: number = 0;
  highValue2: number =  60;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin:15,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  Orderoption: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
