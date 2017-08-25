import { Injectable } from '@angular/core';
import { Squad } from './squad.model';
//import { SQUADS } from './mock-squads';
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
  addSquad(newSquad: Squad) {
   this.squads.push(newSquad);
 }

  getSquadById(squadId: string){
    return this.database.object('squads/' + squadId);
  }

  updateSquad(localUpdatedSquad){
    var albumEntryInFirebase = this.getSquadById(localUpdatedSquad.$key);
    albumEntryInFirebase.update({name: localUpdatedSquad.name,
                                description: localUpdatedSquad.description});
  }

}
