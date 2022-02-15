import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get('http://localhost:4000/realestate/getAll');
  }

  getSimpleFiltered(type, city, municipality, microlocation, maxPrice, squareFootage, rooms) {
    return this.http.get(`http://localhost:4000/realestate/getSimpleFilter?type=${type}&city=${city}&municipality=${municipality}&microlocation=${microlocation}&maxprice=${maxPrice}&squareFootage=${squareFootage}&rooms=${rooms}`);
  }


  add(title, type, rooms, city, municipality, microlocation,
    street, price, square, state, year, heating, floor, maxfloor, desc,
    terrace, loggia, balcony, elevator, basement, garage, garden, ac, internet, intercom, phone,
    image1, image2, image3, image4, image5, image6, seller) {

    const postData = new FormData();
    postData.append("title", title);
    postData.append("type", type);
    postData.append("rooms", rooms);
    postData.append("city", city);
    postData.append("municipality", municipality);
    postData.append("microlocation", microlocation);
    postData.append("street", street);
    postData.append("price", price);
    postData.append("square", square);
    postData.append("state", state);
    postData.append("year", year);
    postData.append("heating", heating);
    postData.append("floor", floor);
    postData.append("maxfloor", maxfloor);
    postData.append("desc", desc);
    postData.append("terrace", terrace);
    postData.append("loggia", loggia);
    postData.append("balcony", balcony);
    postData.append("elevator", elevator);
    postData.append("basement", basement);
    postData.append("garage", garage);
    postData.append("garden", garden);
    postData.append("ac", ac);
    postData.append("internet", internet);
    postData.append("intercom", intercom);
    postData.append("phone", phone);
    postData.append("seller" ,seller);
    postData.append("images", image1);
    postData.append("images", image2);
    postData.append("images", image3);
    if (image4 != null) {
      console.log("smor");
      postData.append("images", image4);
    }
    if (image5 != null) {
      console.log("smor");
      postData.append("images", image5);
    }

    if (image5 != null) {
      console.log("smor");
      postData.append("images", image6);
    }

    console.log("poslato");
    return this.http.post("http://localhost:4000/realestate/add", postData);

  }

  binance() {
    return this.http.get(`https://api.binance.com/api/v3/exchangeInfo?symbol=${"BTCUSDT"}`);
  }

  coingecko() {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${"usd"}&ids=${"bitcoin"}`);
  }

}
