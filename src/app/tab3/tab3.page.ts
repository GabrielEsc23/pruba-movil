import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardContent
  ],
})
export class Tab3Page {

  email = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  async ionViewWillEnter() {

    const { data } =
      await this.authService.getUser();

    this.email =
      data.user?.email || '';

  }

  async logout() {

    await this.authService.logout();

    this.router.navigate(['/login']);

  }

}