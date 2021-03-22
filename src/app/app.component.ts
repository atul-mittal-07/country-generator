import { Component } from '@angular/core';
import countryList from "../utils/countries";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-generator';
  countries = '';
  number = 10;

  generateRandomNumber=()=>{
    this.number = Math.floor(Math.random() * (21 - 0)) + 0;
  };

  generateCountryNames=()=>{
    this.countries = countryList.slice(0,this.number).join(' ');
  }
}
