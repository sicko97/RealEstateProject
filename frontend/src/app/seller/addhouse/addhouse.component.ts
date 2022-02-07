import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { City } from 'src/app/models/city';
import { Location } from 'src/app/models/location';
import { Municipality } from 'src/app/models/municipality';
import { LocationService } from 'src/app/services/location.service';
import { RealestateService } from 'src/app/services/realestate.service';
import { mimeType } from '../../main/register/mime-type.validator';

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {

  form: FormGroup;
  file1 = null;
  file2 = null;
  file3 = null;
  file4 = null;
  file5 = null;
  file6 = null;
  imagePreview1: String;
  imagePreview2: String;
  imagePreview3: String;
  imagePreview4: String;
  imagePreview5: String;
  imagePreview6: String;
  citySelected = false;
  microlocations: Location [] = [];
  cities: City[] = [];
  municipalities: Municipality[] = [];
  rooms : Number[] = [1,1.5,2,2.5,3,3.5,4,4.5,5];
  municipalitySelected = false;
  microlocationSelected = false;
  houseType : String[] = ['apartment', 'house','country house','locale','storage'];

  constructor(private locationService: LocationService , private realEstateService : RealestateService) { }

  ngOnInit(): void {

    this.locationService.getAllCities().subscribe((cities: City[]) => {
      this.cities = cities;
    }
    );


      this.form = new FormGroup({
        'title': new FormControl(null, {
          validators: [
            Validators.required,
            //  Validators.pattern('[a-zA-Z]')
          ]
        }),
        'isChecked': new FormControl(false),
        'image1': new FormControl(null, {
          validators: [
            Validators.required
          ],
          asyncValidators: [mimeType]
        }),
         'image2': new FormControl(null, {
           validators: [
             Validators.required
           ],
           asyncValidators: [mimeType]
         }),
         'image3': new FormControl(null, {
           validators: [
             Validators.required
           ],
           asyncValidators: [mimeType]
         }),
         'image4': new FormControl(null, {
      
         }),
        'image5': new FormControl(null, {
         
        }),
        'image6': new FormControl(null, {
        
        }),
        'municipality': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'city': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'microlocation': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'street': new FormControl(null, {
          validators: [
            Validators.required,
            //  Validators.pattern('[0-9]')
          ]
        }),
        'price': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'rooms': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'square': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'year': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'floor': new FormControl(null, {
          validators: [
            Validators.required
          ]
        }),
        'type': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'state': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'heating': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'maxfloor': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'terrace': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'loggia': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'balcony': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'elevator': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'basement': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'garage': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'desc': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'garden': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'ac': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'internet': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'intercom': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        }),
        'phone': new FormControl(null, {
          validators: [
            Validators.required,
          ]
        })

      });
    }




  onImagePicked1(event: Event) {
      this.file1 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image1: this.file1 });
      this.form.get('image1').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file1);
      reader.onload = () => {
        this.imagePreview1 = (reader.result as String);
      }
    }
    onImagePicked2(event: Event) {
      this.file2 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image2: this.file2 });
      this.form.get('image2').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file2);
      reader.onload = () => {
        this.imagePreview2 = (reader.result as String);
      }
    }
    onImagePicked3(event: Event) {
      this.file3 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image3: this.file3 });
      this.form.get('image3').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file3);
      reader.onload = () => {
        this.imagePreview3 = (reader.result as String);
      }
    }
    onImagePicked4(event: Event) {
      this.file4 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image4: this.file4 });
      this.form.get('image4').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file4);
      reader.onload = () => {
        this.imagePreview4 = (reader.result as String);
      }
    }
    onImagePicked5(event: Event) {
      this.file5 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image5: this.file5 });
      this.form.get('image5').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file5);
      reader.onload = () => {
        this.imagePreview5 = (reader.result as String);
      }
    }
    onImagePicked6(event: Event) {
      this.file6 = (event.target as HTMLInputElement).files[0];
      this.form.patchValue({ image6: this.file6 });
      this.form.get('image6').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file6);
      reader.onload = () => {
        this.imagePreview6 = (reader.result as String);
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
      this.locationService.getMicrolocations(this.form.value.city,this.form.value.municipality).subscribe((microlocations :Location[])=>{
          this.microlocations = microlocations;
          this.microlocationSelected=true;
      })
    }

  onRegister() {
          if(this.form.invalid){
            console.log("Invalid form");
            return
          }else{
            this.realEstateService.add(this.form.value.title,this.form.value.type,this.form.value.rooms,this.form.value.city,this.form.value.municipality,
              this.form.value.microlocation,this.form.value.street,this.form.value.price,this.form.value.square,this.form.value.state,this.form.value.year,this.form.value.heating,
              this.form.value.floor,this.form.value.maxfloor,this.form.value.desc,this.form.value.terrace,this.form.value.loggia,this.form.value.balcony,this.form.value.elevator,
              this.form.value.basement,this.form.value.garage,this.form.value.garden,this.form.value.ac,this.form.value.internet,this.form.value.intercom,this.form.value.phone,
              this.form.value.image1,this.form.value.image2,this.form.value.image3,this.form.value.image4,this.form.value.image5,this.form.value.image6).subscribe(()=>{

              })
          }
    }


}
