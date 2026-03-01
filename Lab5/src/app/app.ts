import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  // import ListComponent too
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Lab5');
  // Define instances variables 
  displayedTest :string = ""
  // Do not display text by default 
  textVisible :boolean = false;
  count :number = 0; 

  // Increment count by +1
  increment() : void
  {
    this.count += 1;
  }

  // Invert value of textVisible on double click
  showText() :void 
  {
    this.textVisible = !this.textVisible;
  }  
}
