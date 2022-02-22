import { BaseCdkCell } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'src/app/models/agency';
import { House } from 'src/app/models/house';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { RealestateService } from 'src/app/services/realestate.service';
import { UserService } from 'src/app/services/user.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  houseId: string;
  avgPrice: number;
  squarePrice: number;
  house: House;
  seller: User;
  agency: Agency;
  terrace: boolean;
  loggia: boolean;
  balcony: boolean;
  elevator: boolean;
  basement: boolean;
  garage: boolean;
  garden: boolean;
  ac: boolean;
  internet: boolean;
  intercom: boolean;
  phone: boolean;
  panelOpenState: boolean = false;

  constructor(private realEstateService: RealestateService,
    private router: Router,
    private userService: UserService,
    private adminService: AdminService) { }

  ngOnInit(): void {

    this.houseId = this.realEstateService.getDetailedRealEstateId();




    this.realEstateService.getRealEstateById(this.houseId).subscribe((house: House) => {
      this.house = house;
      this.terrace = house.terrace;
      this.loggia = house.loggia;
      this.balcony = house.balcony;
      this.elevator = house.elevator;
      this.basement = house.basement;
      this.garage = house.garage;
      this.garden = house.garden;
      this.ac = house.ac;
      this.internet = house.internet;
      this.phone = house.phone;
      this.intercom = house.intercom;
      this.squarePrice = Math.round(house.price / house.square);
      this.avgPrice = house.avgPrice;
      for (let i = 0; i < 100000; i++) {
        for (let j = 0; j < 10000; j++) {

        }
      }
      this.userService.checkUsername(this.house.seller).subscribe((user: User) => {

        this.seller = user;
   
        this.adminService.getAgency(this.seller.agency).subscribe((agency: Agency) => {
          if (agency) {
            this.agency = agency;

          }
        
        })
      })

    })


  }

  ngAfterViewInit() {

  }


  back() {
    this.router.navigate(['/buyer']);
  }

}
