import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TeamData } from 'src/app/models/teamData';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamData: TeamData[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public getMappedTeams(): Observable<any> {
    return this.getAllTeams()
      .pipe(
        map((teams) => {
          let teamsInfo = teams.teams;
          teamsInfo.forEach(team => {
            let newTeam = new TeamData()
            newTeam.id = team.id;
            newTeam.name = team.name;
            this.teamData.push(newTeam)
          })
          return this.teamData
        })
      )
  }

  public getAllTeams(): Observable<any> {
    const nhlApiEndpoint = environment.nhlApiEndpoint;
    const teamsConcat = 'teams';
    const nhlApiTeamsEndpoint = nhlApiEndpoint + teamsConcat;
    return this.http.get(nhlApiTeamsEndpoint)
      .pipe(
        catchError(error => {
          return throwError('Error getting all the nhl teams')
        })
      );
  }
}
