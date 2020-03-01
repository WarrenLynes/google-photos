import { NgModule } from '@angular/core';
import { UiModule } from '@google-images/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from '../../../../libs/ui/src/lib/detail/detail.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'photos', pathMatch: 'full' },
      { path: '404', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', redirectTo: 'home', pathMatch: 'full' },
      { path: 'photos', canActivate: [AuthGuard], children: [
          { path: '', component: MainComponent},
          { path: ':id', component: DetailComponent}
        ]},
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
