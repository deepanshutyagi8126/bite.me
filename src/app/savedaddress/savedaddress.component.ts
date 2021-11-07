import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-savedaddress',
  templateUrl: './savedaddress.component.html',
  styleUrls: ['./savedaddress.component.css']
})
export class SavedaddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on('click','.clickShow',function(){
      $('.showClick').slideDown();
    });
    $(document).on('click','.labDrop',function(){
      $('.showClick1').slideDown();
    });
  }

}
