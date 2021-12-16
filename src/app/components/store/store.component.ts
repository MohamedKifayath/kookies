import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }
  buyCookies(event)
  {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.value;
    var value = $('#'+idAttr).siblings('.storePrice').text();
    var totalValue :number;
    totalValue = Number($('.myCoin').text());
    totalValue = Number(totalValue) - Number(value);
    if(totalValue < 0)
    {
      alert("You don't have sufficient cookiees");
      return false;
    }
    $('.myCoin').text(totalValue);
  }
}
