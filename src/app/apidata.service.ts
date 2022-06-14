import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApidataService {


  constructor(private http:HttpClient) {}

      getData(country:String){
        let url=`https://v6.exchangerate-api.com/v6/c3baf7d76da514d1bacda01b/latest/${country}`
        return this.http.get(url);
      }
}
