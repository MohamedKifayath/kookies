import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  showModal: boolean;
  loginForm: FormGroup;
  constructor(private render:Renderer2,private elementRef: ElementRef,private router: Router) { }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  toggle(event:any)
  {
    $('.container').stop().addClass('active');
  }
  switch()
  {
    $('.container').stop().removeClass('active');
  }

  loginSubmit()
  {
    let userName = this.loginForm.get('userName').value;
    let passWord = this.loginForm.get('passWord').value;
    if(userName== 'test@gmail.com' && passWord == 'test')
    {
      sessionStorage.setItem("x-auth",userName);
      this.router.navigate( ["dashboard"] );
    }
    else
    {
      alert("Email id and password mismatch");
    }
  }


  ngOnInit(): void {
    if ( sessionStorage.getItem('x-auth')){
      this.router.navigate( ["dashboard"] );
    }
    this.loginForm = new FormGroup({
      userName : new FormControl('',[Validators.required,Validators.email]),
      passWord : new FormControl('',Validators.required)
    })
  }

}
