import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseJSON } from 'src/app/models/HouseJSON';
import { mimeType } from '../../main/register/mime-type.validator';
@Component({
  selector: 'app-addjson',
  templateUrl: './addjson.component.html',
  styleUrls: ['./addjson.component.css']
})
export class AddjsonComponent implements OnInit {

  constructor() { }
  form: FormGroup;
  houseJSON: HouseJSON;
  selectedJSON;
  jsonName : string;
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

    this.form = new FormGroup({
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
      // this.imagePreview1 = (reader.result as String);
      this.imagePreview1 =(event.target as HTMLInputElement).files[0].name;
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


  onSubmit() {
    if (this.form.invalid) {

      return
    } else {
    }
  }

  uploadFile(event :Event){
    this.selectedJSON = (event.target as HTMLInputElement).files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedJSON, "UTF-8");
    fileReader.onload = () => {
      this.jsonName =  (event.target as HTMLInputElement).files[0].name;
      try{
      this.houseJSON = (JSON.parse(fileReader.result.toString()));
      }catch(e){
          this.jsonName = "INVALID JSON!";
      }
      alert(this.houseJSON.Realestate.Characteristics);
    }
    // fileReader.onerror=(error)=>{
    //   this.jsonName = "Invalid JSON";
    // }
  }

}
