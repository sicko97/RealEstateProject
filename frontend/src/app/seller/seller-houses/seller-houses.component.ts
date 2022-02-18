import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';
import { RealestateService } from 'src/app/services/realestate.service';

@Component({
  selector: 'app-seller-houses',
  templateUrl: './seller-houses.component.html',
  styleUrls: ['./seller-houses.component.css']
})
export class SellerHousesComponent implements OnInit {

  dataSource: House[] = [];
  displayedColumns: string[] = ["title", 'price', 'edit', 'delete'];

  constructor(private realEstateService: RealestateService) { }

  ngOnInit(): void {
    this.realEstateService.getBySeller(JSON.parse(sessionStorage.getItem('user')).username)
      .subscribe((houses: House[]) => {
        this.dataSource = houses;
      })
  }


  edit(id) {

  }

  sold(house) {
    this.realEstateService.sell(house._id).subscribe(() => {
      this.realEstateService.getBySeller(JSON.parse(sessionStorage.getItem('user')).username)
        .subscribe((houses: House[]) => {
          this.dataSource = houses;
        })
    })
  }

}
