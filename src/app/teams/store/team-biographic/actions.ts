import { Action } from '@ngrx/store';
import { TeamData } from '../../models/teamData';

export enum TeamsActionTypes {
  LoadTeams = '[Teams] Load Teams',
  MapTeams = '[Teams] Mapped Teams',
  LoadIndividualTeam = '[Teams] Load Individual Team',
  MapIndividualTeam = '[Teams] Map Individual Teams'
}

export class TeamAction implements Action {
  type: string;
  payload: {
    teamData: any,
    mappedData: TeamData[]
  };
}

export class LoadTeams implements Action {
  readonly type = TeamsActionTypes.LoadTeams;
}

export class MappedTeams implements Action {
  readonly type = TeamsActionTypes.MapTeams;

  constructor(readonly payload: {mappedData: TeamData[]}) {

  }
}

export type TeamsActionsUnion = LoadTeams | MappedTeams;
