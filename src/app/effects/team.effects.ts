import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HockeyState } from '../reducers';
import { Store } from '@ngrx/store';
import { TeamService } from '../shared/services/team.service';
import { LoadTeams, TeamsActionTypes } from '../actions/teams.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TeamEffects {

  @Effect()
  loadTeam$ = this.actions$
    .pipe(
      ofType<LoadTeams>(TeamsActionTypes.LoadTeams),
      mergeMap((action) => this.teamService.getAllTeams()
      .pipe(
        map(teams => {
          return (new LoadTeams({teamData: teams}))
        }),
        catchError((errorMessage) => of(console.log(errorMessage)))
      ))
    )

  constructor(
    private actions$: Actions, 
    private store: Store<HockeyState>,
    private teamService: TeamService
    ) {}

}
