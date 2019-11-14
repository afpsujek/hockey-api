import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';
import { TeamState, selectTeams, HockeyState, selectMappedTeams } from '../reducers';
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

  private teamsData: TeamData[] = null;
  team$: Observable<TeamData[]>;

  constructor(
    private teamService: TeamService,
    private store: Store<HockeyState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadTeams({teamData: this.teamsData}));
  }

  //this currently causes an infinite loop, split out get teams and get mapped teams to two different actions
  public getTeams() {
    this.team$ = this.store.pipe(select(selectMappedTeams));
    this.team$.subscribe(res => {
      this.teamsData = res
      console.log(res)
    })
  }

}
