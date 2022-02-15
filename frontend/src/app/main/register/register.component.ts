import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Agency } from 'src/app/models/agency';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from '../../services/user.service';
import { mimeType } from './mime-type.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  imagePreview: String;
  isChecked = false;
  approved = 0;
  type = 0;
  file = null;
  captcha : boolean = false;
  agencies : Agency[];
  taken : boolean = false;

  constructor(private router: Router,
     private userService: UserService,
     private adminService : AdminService) { }

  ngOnInit(): void {

    this.adminService.getAll().subscribe((agencies:Agency[])=>{
        this.agencies = agencies;
    })


    this.form = new FormGroup({
      'username': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/[a-zA-Z]/)
        ]
      }),
      'firstname': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/[a-zA-Z]/)
          //  Validators.pattern('[a-zA-Z]')
        ]
      }),
      'isChecked': new FormControl(false),
      'image': new FormControl(null, {
        validators: [
          Validators.required
        ],
        asyncValidators: [mimeType]
      }),
      'lastname': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/[a-zA-Z]/)
        ]
      }),
      'password': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])^[A-Za-z][A-Za-z\d@$!%*#?&]/)

        ]
      }),
      'city': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/[a-zA-Z]/)
        ]
      }),
      'birthday': new FormControl(null, {
        validators: [
          Validators.required
        ]
      }),
      'phone': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern(/^[+](\(\d{3}\))[0-9]{8,}/)
          //  Validators.pattern('[0-9]')
        ]
      }),
      'email': new FormControl(null, {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      'agency': new FormControl("", {
        validators: [
        ]
      }),
      'licence': new FormControl(0, {
        validators: [
        ]
      })
    });
  }


  onToggle(ob: MatSlideToggleChange) {
    this.isChecked = !this.isChecked;

    // if (this.isChecked) {
    //   this.type = 1;
    //   this.form.get('agency').setValidators([Validators.required]);
    //   this.form.get('licence').setValidators([Validators.required]);
    // } else {
    //   this.type = 0;
    //   this.form.get('agency').clearValidators();
    //   this.form.get('licence').clearValidators();
    // }
    // this.form.get('agency').updateValueAndValidity();
    // this.form.get('licence').updateValueAndValidity();
  }

  onImagePicked(event: Event) {
    this.file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: this.file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imagePreview = (reader.result as String);
    }
  }

  onRegister() {
    if (this.form.invalid || !this.captcha) {
      return
    } else {
      this.userService.checkUsername(this.form.value.username).subscribe((user:User)=>{
        if(user){
            this.taken=true;
        }else{
          this.userService.register(this.form.value.firstname, this.form.value.lastname, this.form.value.username,
            this.form.value.password, this.form.value.city, this.form.value.birthday, this.form.value.phone, this.form.value.email,
            this.form.value.agency, this.form.value.licence, this.type, this.form.value.image, this.approved).subscribe((resp) => {
              this.router.navigate(['../landing']);
            });
        }
      })
   

    }
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform 
    this.captcha = true;
  }

}
