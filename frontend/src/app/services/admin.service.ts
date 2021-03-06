import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  
  addAgency(name, address,city,phone,pib) {

    const data = {
      name: name,
      address: address,
      city : city,
      phone : phone,
      pib : pib
    }

    return this.http.post("http://localhost:4000/agency/add", data);

  }
  
  getAgency(name){
    return this.http.get(`http://localhost:4000/agency/getOne?name=${name}`);
  }

  getAll(){

    return this.http.get('http://localhost:4000/agency/getAll');

  }


}
