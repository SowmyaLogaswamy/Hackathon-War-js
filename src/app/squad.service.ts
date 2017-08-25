import { Injectable } from '@angular/core';
import { Squad } from './squad.model';
import { SQUADS } from './mock-squads';

@Injectable()
export class SquadService {

  constructor() { }

  getSquads() {
    return SQUADS;
  }

}
