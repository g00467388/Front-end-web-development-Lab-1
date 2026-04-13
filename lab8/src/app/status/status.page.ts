import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule,
    IonList, IonRadioGroup, IonItem, IonLabel,
    IonRadio, IonButton, RouterLink, IonBackButton, IonButtons]
})
export class StatusPage implements OnInit {

  status :string = ""

  // Add storage via DI
  constructor(private storage :Storage) {   }
 
  // asynchronously save statis upon clicking save
  async saveStatus() {
    console.log(this.status)
    await this.storage.create();
    // Set key as Mystatus
    await this.storage.set("Mystatus", this.status)
  }


  ngOnInit() {
  }

  
}
