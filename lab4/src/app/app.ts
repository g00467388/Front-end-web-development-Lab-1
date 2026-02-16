import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './acomponent/acomponent';
import { BComponent } from './bcomponent/bcomponent';

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  
  name:string = "Tomás"
  age:number = 20
  
  

}
