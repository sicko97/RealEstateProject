import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private editableUser : User;

  constructor(private http: HttpClient) { }

  login(username, password) {

    const data = {
      username: username,
      password: password
    }

    return this.http.post("http://localhost:4000/users/login", data);

  }

  register(firstname, lastname, username, password, city, birthday,
    phone, email, agency, licence, type, image, approved) {
    const postData = new FormData();
    postData.append("firstname", firstname);
    postData.append("lastname", lastname);
    postData.append("username", username);
    postData.append("password", password);
    postData.append("city", city);
    postData.append("birthday", birthday);
    postData.append("phone", phone);
    postData.append("email", email);
    postData.append("agency", agency);
    postData.append("licence", licence);
    postData.append("type", type);
    postData.append("image", image, username);
    postData.append("approved", approved);

    console.log("poslato");
    return this.http.post("http://localhost:4000/users/register", postData);

  }

  getUnapprovedUsers() {
    return this.http.get("http://localhost:4000/users/unapproved");
  }

  approveUser(username) {
    const data = {
      username: username
    }
    return this.http.post("http://localhost:4000/users/approve", data)
  }

  checkUsername(username){
    return this.http.get(`http://localhost:4000/users/checkUsername?username=${username}`)
  }

 

  denyUser(username) {
    const data = {
      username: username
    }
    return this.http.post("http://localhost:4000/users/deny", data)
  }

  getAllUsers() {
    return this.http.get("http://localhost:4000/users/getall");
  }

  updateUser(username,email,phone){
    const data = {
      username:username,
      email : email,
      phone : phone
    }
    return this.http.post("http://localhost:4000/users/update",data);
  }

  deleteUser(username:string){
   
    return this.http.delete("http://localhost:4000/users/delete/" + username);
  }

  getEditableUser() : User{
    return this.editableUser;
}

setEditableUser(user){
  this.editableUser = user;
}


}
