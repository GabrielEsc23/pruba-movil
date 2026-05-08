import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
  IonToast
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
    IonToast,
    FormsModule
  ]
})
export class LoginPage {

  email = '';
  password = '';

  mensaje = '';
  mostrarToast = false;

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  async login() {

    const { error } = await this.authService.login(
      this.email,
      this.password
    );

    if (error) {
      this.mensaje = error.message;
      this.mostrarToast = true;
      return;
    }

    this.router.navigate(['/tabs/tab1']);
  }

  irRegistro() {
    this.router.navigate(['/register']);
  }

}