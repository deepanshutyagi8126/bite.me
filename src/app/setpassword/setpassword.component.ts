import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(document).on('click','.active3',function(){
      $('.active3').addClass('active4')
      $('.faactive2').removeClass(' fa-eye');
      $('.faactive2').addClass(' fa-eye-slash');
      $('#password1').attr('type','text');
    });
    $(document).on('click','.active3.active4',function(){
      $('.active3.active4').removeClass('active4')
      $('.faactive2').removeClass(' fa-eye-slash');
      $('.faactive2').addClass(' fa-eye');
      $('#password1').attr('type','password');
    });

    $(document).on('click','.active5',function(){
      $('.active5').addClass('active6')
      $('.faactive3').removeClass(' fa-eye');
      $('.faactive3').addClass(' fa-eye-slash');
      $('#password2').attr('type','text');
    });
    $(document).on('click','.active5.active6',function(){
      $('.active5.active6').removeClass('active6')
      $('.faactive3').removeClass(' fa-eye-slash');
      $('.faactive3').addClass(' fa-eye');
      $('#password2').attr('type','password');
    });

  }

}
