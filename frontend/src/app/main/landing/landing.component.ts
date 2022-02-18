import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/models/house';
import { RealestateService } from 'src/app/services/realestate.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

 
  username :String;
  password: String;
  houses : House[];

  constructor(private router : Router,
     private realEstateService:RealestateService) { }

  ngOnInit(): void {
    this.realEstateService.getLastFive().subscribe((houses:House[])=>{
        this.houses = houses;
    })
  }

//Login

  login():void{
    this.router.navigate(['login']);
  }


  register():void{
    this.router.navigate(['register']);
  }

}


