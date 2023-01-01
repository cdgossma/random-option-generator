import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Option Picker';
  output = "";
  message = "Options must be separated by a comma";
  chooseRandom(options: string){
    this.defaultObjs();
    if (options.match(",")) {         
      let optionsToChoose: string[] = options.split(",");
      let random: number = Math.floor(Math.random() * optionsToChoose.length);
      this.output =optionsToChoose[random].trim();
    } else {
      //I don't know how to do this. Will have to look into it more. 
      throw new Error(this.message);
    }
  }

defaultObjs(){
  this.message = "";
  this.output = "";
}

}

