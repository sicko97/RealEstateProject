import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get("http://localhost:4000/location/getall");
  }


  getAllCities() {
    return this.http.get("http://localhost:4000/location/getcities");
  }

  getMunicipalities(city) {
    return this.http.get("http://localhost:4000/location/getmunicipalities/" + city);
  }

  getMicrolocations(city,municipality){
      return this.http.get("http://localhost:4000/location/getmicro/" + city + "/" + municipality);
  }

  delete(location) {
    return this.http.delete("http://localhost:4000/location/delete/" + location);
  }

  add(city, municipality,microlocation) {

    const data = {
      city: city,
      municipality: municipality,
      microlocation : microlocation
    }
    return this.http.post("http://localhost:4000/location/add", data);

  }

}



