import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';
import { TeamState, selectTeams, HockeyState, selectMappedTeams } from '../reducers';
import { Store, select } from '@ngrx/store';
import { LoadTeams } from '../actions/teams.actions';
import { TeamData } from '../models/teamData';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  private teamsData: TeamData[] = null;
  team$: Observable<TeamData[]>;

  constructor(
    private teamService: TeamService,
    private store: Store<HockeyState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadTeams({teamData: this.teamsData}));
  }

  public getTeams() {
    this.team$ = this.store.pipe(select(selectMappedTeams));
    this.team$.subscribe(res => {
      this.teamsData = res
      console.log(res)
    })
  }

  public navToTeamDetails(id) {
    this.router.navigate(['/teams/' + id])
  }
}
