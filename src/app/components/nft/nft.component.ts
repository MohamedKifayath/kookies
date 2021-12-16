import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }

}
