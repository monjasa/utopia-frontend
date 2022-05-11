import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect, signOut, User, user } from '@angular/fire/auth';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = user(this.auth);
  }

  async signIn(): Promise<never> {
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  public getIdToken(): Observable<string | null> {
    return this.user$
      .pipe(
        take(1),
        switchMap((user: User | null) => user?.getIdToken() ?? of(null)),
      );
  }
}
