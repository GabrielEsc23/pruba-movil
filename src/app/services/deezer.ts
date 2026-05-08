import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private api = '/deezer/search?q=';

  constructor(private http: HttpClient) {}

  async buscarMusica(texto: string): Promise<any> {

    return await firstValueFrom(
      this.http.get(`${this.api}${texto}`)
    );

  }

}