import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userSevice: UserService, private router: Router) { }

  dataSource: User[] = [];
  displayedColumns: string[] = ["username", 'role', 'status', 'edit', 'delete'];

  ngOnInit(): void {
    this.userSevice.getAllUsers().subscribe((data: User[]) => {
      this.dataSource = data;
    })
  }


  edit(user) {
    this.userSevice.setEditableUser(user);
    this.router.navigate(['admin/edituser']);
  }

  delete(user) {
    this.userSevice.deleteUser(user.username).subscribe(() => {
      this.userSevice.getAllUsers().subscribe((data: User[]) => {
        this.dataSource = data;
      })
    });
  }

}
