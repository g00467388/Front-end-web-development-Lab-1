import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie-service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardHeader, IonCardContent],
})
export class HomePage {
  movies :any[] = []
  // inject MovieService using DI
  constructor(private _movieService : MovieService) {}
  // On home page load retrieve all shrek movies
  ionViewWillEnter()
  {
    this._movieService.GetShrekMovieData().subscribe(
      (data) => {
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }  
}
