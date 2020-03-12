import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TeamData } from 'src/app/teams/models/teamData';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  public getMappedTeams(teams): TeamData[] {
    const teamData: TeamData[] = teams.teams;

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
