import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }

}
