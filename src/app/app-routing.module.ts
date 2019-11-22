import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'teams', component: TeamsComponent},
  { path: 'teams/:id', component: TeamComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
