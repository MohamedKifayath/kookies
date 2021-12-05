import { Component, OnInit } from '@angular/core';
import { PortfolioserviceService } from 'src/app/components/portfolio/portfolioservice.service'
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  showModal: boolean = false;
  title: any;
  image: any;
  description: any;
  SlideOptions = {
    items: 6, dots: false, nav: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    }
  };
  //CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor(private portfolioService: PortfolioserviceService) { }

  ngOnInit(): void {
    $.getScript('assets/js/app.js');
    window.scrollTo(0, 0);
  }
  allGames = [
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Intro-1.png"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/Intro-2.png"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Intro-3.png"
    }
  ]
  myGames = [
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Apex-legends.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/Battlefield-1.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/COD-1.jpg"
    },
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/counter-strike.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/Destiny.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Fortnite.jpg"
    },
    {
      text: "Do you like playing video games?",
      image: "assets/images/games/Pubg.jpg"
    },
    {
      text: "Do you have fun playing them?",
      image: "assets/images/games/rainbow.jpg"
    },
    {
      text: "Do you want more than just fun?",
      image: "assets/images/games/Valorant-1.jpg"
    }
  ]
  benefits = [
    {
      id: 1,
      title: "Earn Cryptocurrency",
      image: "assets/images/benifits/Benefit-1.png",
      describtion: `Kookies lets you earn the platform’s native cryptocurrency in exchange for your gaming activity. This currency is built through Hedera 
      Network and can be liquidated in exchange for other currencies. Thus, you get to earn money upon every time you play your favorite video games.`
    },
    {
      id: 2,
      title: "Avail offers and cashbacks",
      image: "assets/images/benifits/Benefit-2.png",
      describtion: ` We reward gamers with ‘Cookies Points’ for every game they play. ‘Cookies’ is our secondary in- platform currency, using which they 
      can purchase offers and cashbacks on the Kookies store from our partnered brands.`
    },
    {
      id: 3,
      title: "Compete in Esports",
      image: "assets/images/benifits/Benefit-3.png",
      describtion: `Participate in Kookies monthly esports tournaments and win great cash prizes. Gamers compete against similarly skilled and ranked players in
      performance-based tournament format to win those prizes.`
    },
    {
      id: 4,
      title: "Earn from Paid Surveys: ",
      image: "assets/images/benifits/Benefit-4.png",
      describtion: ` Participate in paid surveys offered from our partnered brands to unlock offers and cash prizes. Kookies allows you to monetize from your 
      opinions.`
    },
    {
      id: 5,
      title: "Win more rewards",
      image: "assets/images/benifits/Benefit-5.png",
      describtion: ` Stand to win more bumper rewards in exchange for your Cookie points. We make your dreams come true through your gaming.`
    },
    {
      id: 6,
      title: "Support Charitable Causes",
      image: "assets/images/benifits/Benefit-6.png",
      describtion: `Support noble and charitable causes across the globe and watch how your gaming positively transforms others lives.`
    },
    {
      id: 7,
      title: "Support Content Creators",
      image: "assets/images/benifits/Benefit-7.png",
      describtion: `Support your favorite content creators, gamers and streamers across the platforms by subscribing to Kookies.`
    },
    {
      id: 8,
      title: "Buy and Sell NFT’s",
      image: "assets/images/benifits/Benefit-8.png",
      describtion: `Kookies will host an NFT marketplace that allows you, content creators and brands to create and list NFT’s. Our NFT’s are created using the 
      hedera network, therefore have the lowest carbon footprint.`
    },
    {
      id: 9,
      title: "Invite others to earn more",
      image: "assets/images/benifits/Benefit-9.png",
      describtion: `Invite other gamers to subscribe to the platform and earn affiliate commission upon every time your referred gamers subscribe to the 
      platform.`
    }
  ]
  show(id: any) {
    this.showModal = true; // Show-Hide Modal Check
    this.title = this.benefits.filter(x => x.id == id)[0].title;
    this.image = this.benefits.filter(x => x.id == id)[0].image;
    this.description = this.benefits.filter(x => x.id == id)[0].describtion;
  }
  hide() {
    this.showModal = false;
  }
  subscribe(userlogin) {
    if (userlogin.invalid)
      return;
    this.portfolioService.emailSubscribe(userlogin?.value?.email);
    Swal.fire('Thanks for Subscribing');
    userlogin.resetForm();
  }
}
