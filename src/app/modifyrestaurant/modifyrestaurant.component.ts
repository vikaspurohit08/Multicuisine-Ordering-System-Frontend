import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modifyrestaurant',
  templateUrl: './modifyrestaurant.component.html',
  styleUrls: ['./modifyrestaurant.component.css']
})
export class ModifyrestaurantComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    $(document).ready(function() {
      $('#show').click(function(){
        $('#collapse').show();
      });
      $('#hide').click(function(){
        $('#collapse').hide();
      })
    });
  }
  
  
  


}
