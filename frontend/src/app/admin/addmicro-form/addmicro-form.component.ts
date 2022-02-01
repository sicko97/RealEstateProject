import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Municipality } from 'src/app/models/municipality';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-addmicro-form',
  templateUrl: './addmicro-form.component.html',
  styleUrls: ['./addmicro-form.component.css']
})
export class AddmicroFormComponent implements OnInit {

  constructor(private locationService: LocationService, private router: Router) { }

  cities: City[] = [];
  municipalities: Municipality[] = [];
  form: FormGroup;
  citySelected = false;
  municipalitySelected = false;


  ngOnInit(): void {

    this.locationService.getAllCities().subscribe((cities: City[]) => {
      this.cities = cities;
    })

    this.form = new FormGroup({
      'city': new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      'municipality': new FormControl(null, {
        validators: [
          Validators.required,
          //  Validators.pattern('[a-zA-Z]')
        ]
      }),
      'microlocation': new FormControl(null, {
        validators: [
          Validators.required,
          //  Validators.pattern('[a-zA-Z]')
        ]
      })
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('desilo se');
      return
    } else {

      this.locationService.add(this.form.value.city,
        this.form.value.municipality,
        this.form.value.microlocation).subscribe(() => {
          this.router.navigate(['admin/micro']);
        });

    }

  }

  changeCity(obj: MatSelectChange) {
    this.citySelected = true;
    this.locationService.getMunicipalities(this.form.value.city).subscribe((municipalities: Municipality[]) => {
      this.municipalities = municipalities;
    })
  }


  changeMunicipality(obj: MatSelectChange) {
    this.municipalitySelected = true;
  }


}


