import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonBackButton]
})
export class ConnachtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
