import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TeamService } from 'src/app/shared/services/team.service';
import { TeamsActionTypes, LoadTeams, MappedTeams } from './actions';
import { HockeyState } from './state';

@Injectable()
export class TeamEffects {

  @Effect()
  loadTeams$ = this.actions$
    .pipe(
      ofType<LoadTeams>(TeamsActionTypes.LoadTeams),
      mergeMap(() => this.teamService.getAllTeams()
      .pipe(
        map(teams => {
          return (new MappedTeams({mappedData: this.teamService.getMappedTeams(teams)}))
        }),
        catchError((errorMessage) => of(console.log(errorMessage)))
      ))
    )

    @Effect()
    loadTeam$ = this.actions$
        .pipe(
          
        )


  constructor(
    private actions$: Actions, 
    private store: Store<HockeyState>,
    private teamService: TeamService
    ) {}

}
