import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on('click','.footerArrow',function(){
      $('.footerArrow').addClass('active');
      $('.showFooter').slideDown();
    });

    $(document).on('click','.footerArrow.active',function(){
      $('.footerArrow.active').removeClass('active');
      $('.showFooter').slideUp();
    });
  }

}
