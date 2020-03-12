import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../shared/services/team.service';
import { Store, select } from '@ngrx/store';

import { TeamData } from '../../models/teamData';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HockeyState } from '../../store/team-biographic/state';
import { LoadTeams } from '../../store/team-biographic/actions';
import { selectMappedTeams } from '../../store/team-biographic/selectors';

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
    this.store.dispatch(new LoadTeams());
  }

  public getTeams() {
    this.team$ = this.store.pipe(select(selectMappedTeams));
    this.team$.subscribe(res => {
      this.teamsData = res
    })
  }

  public navToTeamDetails(id) {
    this.router.navigate(['/teams/' + id])
  }
}
