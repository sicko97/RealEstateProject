import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { House } from 'src/app/models/house';
import { Municipality } from 'src/app/models/municipality';
import { LocationService } from 'src/app/services/location.service';
import { RealestateService } from 'src/app/services/realestate.service';
import { Location } from 'src/app/models/location';
import { Router } from '@angular/router';
import { HouseDetailsComponent } from '../house-details/house-details.component';

@Component({
  selector: 'app-buyer-all',
  templateUrl: './buyer-all.component.html',
  styleUrls: ['./buyer-all.component.css']
})
export class BuyerAllComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  DATA: House[];
  dataSource: MatTableDataSource<House> = new MatTableDataSource<House>();
  microlocations: Location[] = [];
  cities: City[] = [];
  municipalities: Municipality[] = [];
  citySelected: Boolean = false;
  municipalitySelected: Boolean = false;
  microlocationSelected: Boolean = false;
  city: String;
  municipality: String;
  microlocation: String;
  houseType : String[] = ['Apartment', 'House','Country house','Locale','Storage'];
  rooms: Number[] = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  room: Number;
  type: string;
  squareFootage: Number;
  maxPrice: Number;


  constructor(private realestateService: RealestateService,
    private changeDetectorRef: ChangeDetectorRef,
    private locationService: LocationService,
    private router : Router) { }



  ngOnInit(): void {

    this.locationService.getAllCities().subscribe((cities: City[]) => {
      this.cities = cities;
    }
    );


    this.realestateService.getAll().subscribe((houses: House[]) => {
      this.DATA = houses;
      this.dataSource.data = this.DATA;

      houses.forEach(house=>{
        let sum = 0;
         let num = 0;
          houses.forEach(element=>{
              if(element.type == house.type && element.microlocation == house.microlocation){
               sum = sum + house.price/house.square;
               num = num + 1;
              }
              house.avgPrice = Math.round(sum/num);
              this.realestateService.updateAvgPrice(house._id,house.avgPrice).subscribe(()=>{

              })
          })
      })

    })

    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }

  ngOnDestroy() {

    if (this.dataSource) {
      this.dataSource.disconnect();
    }

  }

  changeCity(obj: MatSelectChange) {
    this.citySelected = true;
    this.locationService.getMunicipalities(this.city).subscribe((municipalities: Municipality[]) => {
      this.municipalities = municipalities;
      this.municipalitySelected =false;
    })
    this.municipality=undefined;
    this.microlocation=undefined;
    this.microlocations=undefined;
  }


  changeMunicipality(obj: MatSelectChange) {
    this.municipalitySelected = true;
    this.locationService.getMicrolocations(this.city, this.municipality).subscribe((microlocations: Location[]) => {
      this.microlocations = microlocations;
      this.microlocationSelected = true;
    })
  }

  changeMicrolocation(obj : MatSelectChange){

  }

  filter() {
    this.realestateService.getSimpleFiltered(this.type,
      this.city,
      this.municipality,
      this.microlocation,
      this.maxPrice,
      this.squareFootage,
      this.room)
    .subscribe((filteredHouses:House[])=>{
      this.dataSource.data = filteredHouses;
  })
}

details(_id,avg){
    this.realestateService.setDetailedRealEstateId(_id);
    this.router.navigate(["buyer/houseDetails"]);
}

}
