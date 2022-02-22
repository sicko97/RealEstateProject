import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseJSON } from 'src/app/models/HouseJSON';
import { RealestateService } from 'src/app/services/realestate.service';
import { mimeType } from '../../main/register/mime-type.validator';
@Component({
  selector: 'app-addjson',
  templateUrl: './addjson.component.html',
  styleUrls: ['./addjson.component.css']
})
export class AddjsonComponent implements OnInit {

  constructor(private realEstateService: RealestateService,
    private router: Router) { }
  form1: FormGroup;
  form2: FormGroup;
  houseJSON: HouseJSON;
  selectedValidJSON: boolean = false;
  selectedJSON;
  jsonName: string;
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
  ngOnInit(): void {

    this.form1 = new FormGroup({
      'json': new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });

    this.form2 = new FormGroup({
      'image1': new FormControl(null, {
        validators: [
          Validators.required
        ]

      }),
      'image2': new FormControl(null, {
        validators: [
          Validators.required
        ]

      }),
      'image3': new FormControl(null, {
        validators: [
          Validators.required
        ]

      }),
      'image4': new FormControl(null, {

      }),
      'image5': new FormControl(null, {

      }),
      'image6': new FormControl(null, {

      })
    });

  }

  onImagePicked1(event: Event) {
    this.file1 = (event.target as HTMLInputElement).files[0];
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      this.form2.patchValue({ image1: this.file1 });
      this.form2.get('image1').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file1);
      reader.onload = () => {
        this.imagePreview1 = (reader.result as String);
      }
    }
  }
  onImagePicked2(event: Event) {
    this.file2 = (event.target as HTMLInputElement).files[0];
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      alert("Valid File Format");
      this.form2.patchValue({ image2: this.file2 });
      this.form2.get('image2').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file2);
      reader.onload = () => {
        this.imagePreview2 = (reader.result as String);
      }
    }
    else {
      alert("Invalid File Format");
    }

  }
  onImagePicked3(event: Event) {
    this.file3 = (event.target as HTMLInputElement).files[0];
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      this.form2.patchValue({ image3: this.file3 });
      this.form2.get('image3').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file3);
      reader.onload = () => {
        this.imagePreview3 = (reader.result as String);
      }
    }
  }
  onImagePicked4(event: Event) {
    this.file4 = (event.target as HTMLInputElement).files[0];
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      this.form2.patchValue({ image4: this.file4 });
      this.form2.get('image4').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file4);
      reader.onload = () => {
        this.imagePreview4 = (reader.result as String);
      }
    }
  }
  onImagePicked5(event: Event) {
    this.file5 = (event.target as HTMLInputElement).files[0];
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      this.form2.patchValue({ image5: this.file5 });
      this.form2.get('image5').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file5);
      reader.onload = () => {
        this.imagePreview5 = (reader.result as String);
      }
    }
  }
  onImagePicked6(event: Event) {
    let ext = (event.target as HTMLInputElement).files[0].name.match(/\.(.+)$/)[1];
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') {
      this.file6 = (event.target as HTMLInputElement).files[0];
      this.form2.patchValue({ image6: this.file6 });
      this.form2.get('image6').updateValueAndValidity();
      const reader = new FileReader();
      reader.readAsDataURL(this.file6);
      reader.onload = () => {
        this.imagePreview6 = (reader.result as String);
      }
    }
  }


  onSubmit() {
    if (this.form2.invalid) {

      return
    } else {

      let terrace = false;
      let loggia = false;
      let balcony = false;
      let elevator = false;
      let basement = false;
      let garage = false;
      let garden = false;
      let ac = false;
      let internet = false;
      let intercom = false;
      let phone = false;

      this.houseJSON.Realestate.Characteristics.forEach(element => {
        switch (element) {
          case "Terasa": {
            terrace = true;
            break;
          }
          case "Lodja": {
            loggia = true;
            break;
          }
          case "Balkon": {
            balcony = true;
            break;
          }
          case "Lift": {
            elevator = true;
            break;
          }
          case "Podrum": {
            basement = true;
            break;
          }
          case "Garaža": {
            garage = true;
            break;
          }
          case "Bašta": {
            garden = true;
            break;
          }
          case "Klima": {
            ac = true;
            break;
          }
          case "Internet": {
            internet = true;
            break;
          }
          case "Interfon": {
            intercom = true;
            break;
          }
          case "Telefon": {
            phone = true;
            break;
          }
        }
      }
      );


      const json = this.houseJSON.Realestate;

      let title = json.Name + json.City;

      this.realEstateService.add(title, json.Name, json.Rooms, json.City, json.Municipality, json.Microlocation,
        json.Street, json.Price, json.Area, json.State, json.ConstructionYear, json.Heating, json.Floor, json.TotalFloors,
        json.About, terrace, loggia, balcony, elevator, basement, garage, garden, ac, internet, intercom, phone,
        this.file1, this.file2, this.file3, this.file4, this.file5, this.file6, JSON.parse(sessionStorage.getItem('user')).username, false).subscribe(() => {

        });
      for (let i = 0; i < 100000; i++) {
        for (let j = 0; j < 10000; j++) {

        }
      }
      this.router.navigate(['/seller']);
    }
  }

  uploadFile(event: Event) {
    this.selectedJSON = (event.target as HTMLInputElement).files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedJSON, "UTF-8");
    fileReader.onload = () => {
      this.jsonName = (event.target as HTMLInputElement).files[0].name;
      try {
        this.houseJSON = (JSON.parse(fileReader.result.toString()));
      } catch (e) {
        this.jsonName = "INVALID JSON!";
        this.form1.patchValue({ json: undefined });
        this.form1.get('json').updateValueAndValidity();
        return;
      }
      this.selectedValidJSON = true;
      this.form1.patchValue({ json: this.selectedJSON });
      this.form1.get('json').updateValueAndValidity();
    }
    // fileReader.onerror=(error)=>{
    //   this.jsonName = "Invalid JSON";
    // }
  }

  back(){
    this.router.navigate(['/seller']);
  }

}
