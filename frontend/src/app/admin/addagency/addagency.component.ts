import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-addagency',
  templateUrl: './addagency.component.html',
  styleUrls: ['./addagency.component.css']
})
export class AddagencyComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }
  form: FormGroup;

  ngOnInit(): void {

    this.form = new FormGroup({
      'name': new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      'address': new FormControl(null, {
        validators: [
          Validators.required,
          //  Validators.pattern('[a-zA-Z]')
        ]
      }),
      'city': new FormControl(null, {
        validators: [
          Validators.required,
          //  Validators.pattern('[a-zA-Z]')
        ]
      }),
      'phone': new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      'pib': new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('desilo se');
      return
    } else {
      console.log('desilo se');
      this.adminService.addAgency(this.form.value.name, this.form.value.address, this.form.value.city,
        this.form.value.phone, this.form.value.pib).subscribe((resp) => {
          this.form.reset();
        });
    }

  }

}




