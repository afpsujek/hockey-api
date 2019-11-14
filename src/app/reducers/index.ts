import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TeamData } from '../models/teamData';
import { TeamsActionTypes, TeamAction } from '../actions/teams.actions';


export interface TeamState {
  teamData: any | null;
  mappedData: TeamData[] | null;
}

const initialTeamState: TeamState = {
  teamData: null,
  mappedData: null
};

export interface HockeyState {
  teams: TeamState;
}

export function teamReducer(state: TeamState = initialTeamState, action: TeamAction): TeamState {
  switch(action.type) {
    case TeamsActionTypes.LoadTeams:
      return {
        teamData: action.payload.teamData,
        mappedData: null
      }
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

export const selectTeams = (state: HockeyState) => state.teams.teamData;

export const selectMappedTeams = (state: HockeyState) => state.teams.mappedData;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
