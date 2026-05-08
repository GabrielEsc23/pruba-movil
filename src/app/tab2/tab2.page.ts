import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { Camera, CameraResultType } from '@capacitor/camera';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonImg,
    IonCard,
    IonCardContent
  ],
})
export class Tab2Page {

  foto: string = '';

  constructor() {}

  async tomarFoto() {

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    this.foto = image.dataUrl || '';

    localStorage.setItem(
      'foto',
      this.foto
    );

  }

  ionViewWillEnter() {

    const fotoGuardada =
      localStorage.getItem('foto');

    if (fotoGuardada) {
      this.foto = fotoGuardada;
    }

  }

}