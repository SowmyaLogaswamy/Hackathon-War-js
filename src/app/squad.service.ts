import { Injectable } from '@angular/core';
import { Squad } from './squad.model';
import { SQUADS } from './mock-squads';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SquadService {
  squads: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.squads = database.list('squads');
  }

  getSquads() {
     return this.squads;
  }

  getSquadById(squadId: number){
    for (var i = 0; i <= SQUADS.length - 1; i++) {
      if (SQUADS[i].id === squadId) {
        return SQUADS[i];
      }
    }
  }

}
