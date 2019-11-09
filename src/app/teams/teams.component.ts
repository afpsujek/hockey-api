import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';
import { TeamState, selectTeams, HockeyState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { LoadTeams } from '../actions/teams.actions';
import { TeamData } from '../models/teamData';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  private teamsData: TeamData = null;
  team$: Observable<TeamData>;

  constructor(
    private teamService: TeamService,
    private store: Store<HockeyState>
  ) { }

  ngOnInit() {
    this.team$ = this.store.pipe(select(selectTeams));
    this.team$.subscribe(res => {
      console.log(res)
    })
  }

  public getTeams() {
    this.teamService.getMappedTeams().subscribe(result => {
      console.log(result);
    });

    //this.store.dispatch(new LoadTeams({teamData: this.teamsData}));
  }

}
