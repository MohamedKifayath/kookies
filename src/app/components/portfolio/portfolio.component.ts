import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }
  allGames = [
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Valorant-1.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Battlefield-1.jpg"
    }
  ]
  myGames = [
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Valorant-1.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Battlefield-1.jpg"
    },
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Valorant-1.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Battlefield-1.jpg"
    },
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Valorant-1.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Battlefield-1.jpg"
    }
  ]

}
