import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade, AuthFacade } from '@google-images/core-state';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, withLatestFrom } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'google-images-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authenticated$: Observable<boolean> = this.authFacade.authenticated$;
  destroy$: Subject<boolean> = new Subject();
  loading = false;

  links = [
    // {path: '', title: '', icon: ''},
  ];

  constructor(
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.appFacade.initialize();
    this.route.fragment.pipe(
      withLatestFrom(this.authFacade.authenticated$),
      filter(([x, xx]) => x && x.indexOf('access_token') > -1 && !xx),
    ).subscribe(([x]) => {
      const query = {
        access_token: null
      };

      x.split('&').forEach((c) => {
        if (c.indexOf('access_token') > -1) {
          query['access_token'] = c.split('=')[1]
        }
      });

      this.authFacade.authenticate(query);
    });

    this.appFacade.loading$.subscribe((xx) => {
      this.loading = xx;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onLogout() {
    this.authFacade.logout();
  }

  onAuthenticate() {
   this.authFacade.auth();
  }
}
