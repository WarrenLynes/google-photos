import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authenticated, IUser, loading } from './auth.reducer';
import { Credentials } from '@google-images/core-data';
import { Store } from '@ngrx/store';
import { authenticate as authenticateAction, authenticateSuccess, logout } from './auth.actions';
import { AppState } from '../index';
import { environment } from '../../../../../apps/dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthFacade {
  get authenticated$(): Observable<boolean> {
    return this.store.select(authenticated);
  }

  get loading$(): Observable<boolean> {
    return this.store.select(loading);
  }

  constructor(private store: Store<AppState>) {}

  auth() {
    window.location.replace(
      environment.GOOGLE_OAUTH_URL
      + '?client_id=' + environment.GOOGLE_CLIENT_ID
      + '&redirect_uri=' + environment.GOOGLE_REDIRECT_URI
      + '&response_type=' + environment.GOOGLE_RESPONSE_TYPE
      + '&scope=' + environment.GOOGLE_SCOPES
    )
  }

  authenticate({access_token}) {
    this.store.dispatch(authenticateAction({access_token}));
  }

  authenticateSuccess(user) {
    this.store.dispatch((authenticateSuccess({user})))
  }


  logout() {
    this.store.dispatch(logout());
  }
}
