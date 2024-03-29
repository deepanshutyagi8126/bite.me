import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
