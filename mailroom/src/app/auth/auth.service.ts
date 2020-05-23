import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse{
  authenticated: boolean;
  username: string;
}

interface SignInCredentials{
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(null);
  username= '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<any>(this.rootUrl + '/auth/username', {
      username: username,
    });
  }

  signUp(credentials: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials,{
        withCredentials: true
      })
      .pipe(
        tap((response) => {
          this.signedIn$.next(true);
          this.username = response.username;
        })
      );
  }

  checkAuth(){
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`, {
      withCredentials: true
    })
    .pipe(
      tap(({authenticated, username}) => {
        this.signedIn$.next(authenticated);
        this.username = username;
      })
    )
  }

  signOut() {
    return this.http.post(`${this.rootUrl}/auth/signout`,{})
    .pipe(
      tap(()  => {
        this.signedIn$.next(false);
      })
    )
  }

  signIn(credentials: SignInCredentials){
    return this.http.post<any>(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      tap(({username}) => {
        this.signedIn$.next(true);
        this.username= username;
      })
    )
  }
}
