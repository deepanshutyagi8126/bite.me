import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'
declare var $:any;

@Component({
  selector: 'app-myorder2',
  templateUrl: './myorder2.component.html',
  styleUrls: ['./myorder2.component.css']
})
export class Myorder2Component implements OnInit {
  
	change(value: number): void {
    console.log(value);
}
  constructor() { }

  ngOnInit(): void {
    setTimeout(function() {
      $('.cancelll').hide();
      $('.support').show();
  }, 5000); 
  setTimeout(function() {
    $('.active2').addClass('active');
}, 5000); 
  
  var timer2 = "0:5";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);
  }

}
