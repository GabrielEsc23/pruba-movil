import { Injectable } from '@angular/core';
import { supabase } from '../core/supabase.client';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  async register(email: string, password: string) {
    return await supabase.auth.signUp({
      email,
      password
    });
  }

  async login(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password
    });
  }

  async logout() {
    return await supabase.auth.signOut();
  }

  getUser() {
    return supabase.auth.getUser();
  }

}