import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private userService : UserService) { }

  user : User ;
  form: FormGroup;

  ngOnInit(): void {
    this.user = this.userService.getEditableUser();
    this.form = new FormGroup({
      'email': new FormControl(this.user.email, {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      'phone': new FormControl(this.user.phone, {
        validators: [
          Validators.required,
          //  Validators.pattern('[a-zA-Z]')
        ]
      })
    });
}


  onSubmit(){
    if(this.form.invalid){
      return
    }else{
        this.userService.updateUser(this.user.username,this.form.value.email,this.form.value.phone).subscribe(()=> {
          
        })
    }

  }

}
