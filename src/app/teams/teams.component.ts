import { Component, OnInit } from '@angular/core';
import { Squad } from '../squad.model';
import { Router } from '@angular/router';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [SquadService]
})
export class TeamsComponent implements OnInit {
  squads: Squad[];

  constructor(private router: Router, private squadService: SquadService) { }

  ngOnInit() {
    this.squads = this.squadService.getSquads();
  }

  goToDetailPage(clickedSquad: Squad) {
    this.router.navigate(['squads', clickedSquad.id]);
  };
}
