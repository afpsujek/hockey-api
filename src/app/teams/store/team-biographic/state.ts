import { TeamData } from '../../models/teamData';

export interface TeamState {
  teamData: any | null;
  mappedData: TeamData[] | null;
}
  
export const initialTeamState: TeamState = {
  teamData: null,
  mappedData: null
};

export interface HockeyState {
  teams: TeamState;
}