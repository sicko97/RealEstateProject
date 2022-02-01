import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adminapprove',
  templateUrl: './adminapprove.component.html',
  styleUrls: ['./adminapprove.component.css']
})
export class AdminapproveComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUnapprovedUsers().subscribe((data:User[])=>{
      this.unapprovedUsers=data;
    })
  }

  unapprovedUsers : User[]= [];


  onApprove(username : string){
      this.userService.approveUser(username).subscribe(()=>{
        this.userService.getUnapprovedUsers().subscribe((data:User[])=>{
          this.unapprovedUsers=data;
        })
      })
  }

  onDeny(username : string){
    this.userService.denyUser(username).subscribe(()=>{
      this.userService.getUnapprovedUsers().subscribe((data:User[])=>{
        this.unapprovedUsers=data;
      })
    })
}

}
