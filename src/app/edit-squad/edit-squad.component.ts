import { Component, Input, OnInit } from '@angular/core';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-edit-squad',
  templateUrl: './edit-squad.component.html',
  styleUrls: ['./edit-squad.component.css'],
  providers: [SquadService]
})
export class EditSquadComponent implements OnInit {

  @Input() selectedSquad;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

  beginUpdatingSquad(squadToUpdate){
    this.squadService.updateSquad(squadToUpdate);
  }

}
