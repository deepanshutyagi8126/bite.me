import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function () {

      if ($(window).scrollTop() >= 1) {
          $('.header').addClass('fixedHeader');
      } else {
          $('.header').removeClass('fixedHeader');
      }
  });
  }

}
