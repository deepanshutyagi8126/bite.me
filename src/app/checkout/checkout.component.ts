import { Component, OnInit } from '@angular/core';
declare var $:any;

declare function Timepicker(): any; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	change(value: number): void {
        console.log(value);
    }
  	constructor() { }
    
  	ngOnInit() {
      $(document).on('click','.Scheduler',function(){
        $('.timePicker').slideUp();
      });
      $(document).on('click','.schudd',function(){
        $('.timePicker').slideDown();
      });

      Timepicker()

$(document).on('click','.homo1 input',function(){
  $('.homo1').addClass('active');
  $('.noteShow').slideDown();
});
$(document).on('click','.homo1.active input',function(){
  $('.homo1.active').removeClass('active');
  $('.noteShow').slideUp();
});



  	}

}
