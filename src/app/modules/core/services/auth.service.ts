import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private auth: Auth) {
  }

  async signIn(): Promise<never> {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
