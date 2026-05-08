import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { SongDetailComponent } from '../components/song-detail/song-detail.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonButton,
  IonSpinner,
  
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { DeezerService } from '../services/deezer';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonButton,
    IonSpinner,
    SongDetailComponent
    
  ],
})


export class Tab1Page {

  canciones: any[] = [];

  loading = false;

  constructor(
    private deezerService: DeezerService,
    private modalCtrl: ModalController
  ) {}

  async buscar(event: any) {

    const texto = event.target.value;

    if (!texto) {
      this.canciones = [];
      return;
    }

    this.loading = true;

    try {

      const respuesta: any =
        await this.deezerService.buscarMusica(texto);

      this.canciones = respuesta.data;

    } catch (error) {

      console.log(error);

    }

    this.loading = false;

  }

  async verDetalle(cancion: any) {

    const modal = await this.modalCtrl.create({
      component: SongDetailComponent,
      componentProps: {
        cancion
      }
    });

    await modal.present();

  }

}
