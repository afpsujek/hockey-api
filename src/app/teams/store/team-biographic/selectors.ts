import { HockeyState } from './state';

export const selectTeams = (state: HockeyState) => state.teams.teamData;

export const selectMappedTeams = (state: HockeyState) => state.teams.mappedData;


