import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(){
    return this.httpClient.get('https://mocki.io/v1/1472fbca-7f63-40b3-b4d3-22affb4102da');
}

}
