import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  title! : String;

  title1 = "Groupe1";

  number=25;

  condition=true;

  name : any;


  Status = "activee";

  getStatus(){
    return this.Status ;
  }


  save(){
    console.log("Hello Groupe1")
  }
}
