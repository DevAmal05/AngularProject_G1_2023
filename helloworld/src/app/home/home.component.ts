import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {




  msg:any;

  nameList = ['Ahmed','Ali','Imen'];

  title! : String;

  title1 = "Groupe1";

  num = 25;

test = false;
  cond! : boolean

  name = "Imen";


  Status = "activee";

  date = new Date();



  getStatus(){
    return this.Status ;
  }


  save(){
    console.log("Hello Groupe1")
  }
}
