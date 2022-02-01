import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

 
  username :String;
  password: String;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

//Login

  login():void{
    this.router.navigate(['login']);
  }


  register():void{
    this.router.navigate(['register']);
  }

}


