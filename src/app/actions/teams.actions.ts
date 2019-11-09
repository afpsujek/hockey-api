import { Action } from '@ngrx/store';
import { TeamData } from '../models/teamData';

export enum TeamsActionTypes {
  LoadTeams = '[Teams] Load Teams',
}

export class TeamAction implements Action {
  type: string;
  payload: {
    teamData: TeamData
  };
}

export class LoadTeams implements Action {
  readonly type = TeamsActionTypes.LoadTeams;

  constructor(readonly payload: {teamData: TeamData}) {
    
  }
}


export type TeamsActions = LoadTeams;