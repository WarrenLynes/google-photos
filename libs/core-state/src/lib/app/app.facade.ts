import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isInitialized, isLoading } from './app.reducer';
import { select, Store } from '@ngrx/store';
import { AppState } from '../';
import { addLoad, appInit, removeLoad } from './app.actions';
import { authenticate, authenticateSuccess } from '../auth/auth.actions';

@Injectable({providedIn: 'root'})
export class AppFacade {

  initialized$ = this.store.pipe(select(isInitialized));
  loading$ = this.store.pipe(select(isLoading));

  constructor(
    private store: Store<AppState>
  ) {}

  initialize() {
    this.store.dispatch(appInit());
    const access_token = localStorage.getItem('ACCESS_TOKEN');
    if(access_token)
      this.store.dispatch(authenticate({access_token}))
  }

  addLoad(loadId: string) {
    this.store.dispatch(addLoad({loadId}));
  }

  removeLoad(loadId: string) {
    this.store.dispatch(removeLoad({loadId}));
  }
}
