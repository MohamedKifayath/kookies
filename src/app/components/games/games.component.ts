import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  showModal: boolean;
  gameUrl : string;
  gameName : string;
  constructor() { 
    this.gameUrl = '';
    this.gameName = '';
  }
  show(url,name)
  {
    this.showModal = true; // Show-Hide Modal Check
    this.gameUrl = url;
    this.gameName = name;
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop:false
      },
      600: {
        items: 1,
        nav: true,
        loop:false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }

  allGames = [
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/Valorant-1.jpg"
    },
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/Battlefield-1.jpg"
    },
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/Apex-legends.jpg"
    },
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/Destiny.jpg"
    },
    {
      text: "https://tracker.gg/",
      image: "assets/images/games/Fortnite.jpg"
    }
  ]
  myGames = [
    {
      url: "https://tracker.gg/valorant/",
      image: "assets/images/games/Valorant-1.jpg",
      name: "Valorant"
    },
    {
      url: "https://cod.tracker.gg/",
      image: "assets/images/games/COD-1.jpg",
      name:"Call of Duty"
    }
  ]
}
