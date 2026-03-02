import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataServices } from './Services/data-services';
import { WeatherService } from './Services/weather-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // arrays of type any 
  students:any[] = [] 
  weather:any[] = []
  // Inject DataService and WeatherService via DI
  constructor(private dataService :DataServices, private weatherService :WeatherService){}
 
 // Get student data and weather data upon page initialization
  ngOnInit(): void {
    // call student api through data service
    this.dataService.GetStudentData().subscribe(
      // print data and assign data to students[]
      (data) => {
        this.students = data.students; 
        console.log(data.students)
      }
    );
    // call weather api through weather service
    this.weatherService.GetWeather().subscribe(
      // print data and assign data to weather[]
      (data) => {
        this.weather = data;
        console.log(this.weather)
      }
    )
  }
  
  
}
