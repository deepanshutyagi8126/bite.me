import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
$(document).on('click','.eye.active',function(){
  $('.eye.active').removeClass('active');
  $('.eye').addClass('activenew');
$('.faactive').removeClass('fa-eye');
$('.faactive').addClass('fa-eye-slash');
$('.eye').siblings('input').attr('type','text');
});

$(document).on('click','.eye.activenew',function(){
  $('.eye.activenew').removeClass('activenew');
  $('.eye').addClass('active');
$('.faactive').removeClass('fa-eye-slash');
$('.faactive').addClass('fa-eye');
$('.eye').siblings('input').attr('type','password');
});
  }

}
