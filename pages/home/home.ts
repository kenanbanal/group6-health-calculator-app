import { Component } from "@angular/core";
import { NavController, Popover } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage {
  height: number;
  weight: number;
  theBMR: number;
  age: number;
  theDCI: number;
  
  error: string;
  sex: string;
  activity: string;
  
   constructor(public navCtrl: NavController) {}

  calculateTHEDCI() {
    
    if (this.sex == "m") {
     this.theBMR = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    }
    else if (this.sex == "f") {
      this.theBMR = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    }
    else{
      this.error = "ERROR";
    }


    if (this.activity == "1") {
      this.theDCI = this.theBMR * 1.2;
    } 
    else if (this.activity == "2") {
      this.theDCI = this.theBMR * 1.4;
    } 
    else if (this.activity == "3") {
      this.theDCI = this.theBMR * 1.6;
    } 
    else if (this.activity == "4") {
      this.theDCI = this.theBMR * 1.75;
    } 
    else if (this.activity == "5") {
      this.theDCI = this.theBMR * 2.0;
    } 
    else if (this.activity == "6") {
      this.theDCI = this.theBMR * 2.3;
    } 
    else{
      this.error = "ERROR";
    }
  }
}
