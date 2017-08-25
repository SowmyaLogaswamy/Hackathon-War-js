import { Component, OnInit } from '@angular/core';
import { Squad } from '../squad.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  squads: Squad[] = [
    new Squad("Hacking Squad",
       "It is a team with passionate hacker cum coders", 1),
   new Squad("Bits Magnet",
      "It is a team with passionate hacker cum coders", 2),
  new Squad("Jammers",
     "It is a team with passionate hacker cum coders", 3),











  ];

  constructor() { }

  ngOnInit() {
  }

}
