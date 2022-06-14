import { Component } from '@angular/core';
import { ApidataService } from './apidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Calculator';
  currjson:any=[]
  base='INR'
  country2='INR'
  result:number=0
  amount:string=""
  r:number=0

  show=false

  change(a:string){
    this.base=a
    this.show=false
  }

  toCountry(b:string){
    this.country2=b
    this.show=false
  }

  constructor(private currency:ApidataService){

  }
  convert(){
    console.log(this.base)
    console.log(this.country2)
    this.currency.getData(this.base).subscribe(data=>{
      this.currjson = JSON.stringify(data);
      this.currjson=JSON.parse(this.currjson);
      let country=this.country2
      this.r=parseFloat(this.amount)
      this.result=this.r*this.currjson.conversion_rates[country];
      console.log(this.result)
      this.show=true
      this.amount=""

    })
  }
}
