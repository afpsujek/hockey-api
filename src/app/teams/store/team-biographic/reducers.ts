import { TeamState, initialTeamState, HockeyState, } from './state';
import { TeamAction, TeamsActionTypes } from './actions';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export function teamReducer(state: TeamState = initialTeamState, action: TeamAction): TeamState {
    switch(action.type) {
      case TeamsActionTypes.MapTeams:
        return {
          teamData: null,
          mappedData: action.payload.mappedData
        }
        default:
          return state;
    }
  }
  
  export const reducers: ActionReducerMap<HockeyState> = {
    teams: teamReducer
  };

  export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];