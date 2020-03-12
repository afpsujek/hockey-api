import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TeamsComponent } from './teams/containers/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { TeamComponent } from './teams/components/team/team.component';
import { reducers, metaReducers } from './teams/store/team-biographic/reducers';
import { TeamEffects } from './teams/store/team-biographic/effects';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TeamEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
