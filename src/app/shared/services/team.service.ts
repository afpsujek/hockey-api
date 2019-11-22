import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TeamData } from 'src/app/models/teamData';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  public getMappedTeams(teams): TeamData[] {
    const teamData: TeamData[] = [];

      let teamsInfo = teams.teams;
      teamsInfo.forEach(team => {
        let newTeam = new TeamData()
        newTeam.id = team.id;
        newTeam.name = team.name;
        teamData.push(newTeam)
      })
      
      return teamData;
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

  public getTeam(id, query?): Observable<any> {
    const nhlApiEndpoint = environment.nhlApiEndpoint;
    let search;

    if (query) {
      const teamsConcat = 'teams/' + id + '?' + query;
      search = nhlApiEndpoint + teamsConcat;
    } else {
      const teamsConcat = 'teams/' + id;
      search = nhlApiEndpoint + teamsConcat;
    }

    return this.http.get(search)
      .pipe(
        catchError(error => {
          return throwError('Error getting all the nhl teams')
        })
      );
  }
}
