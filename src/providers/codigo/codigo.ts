import { Observable } from '@firebase/util';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CodigoProvider {

  private PATH = "codigo/"

  constructor(public db: AngularFireDatabase) {

  }



  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('titulo'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }


  get(Key: String) {

    return this.db.object(this.PATH + Key)
      .snapshotChanges()
      .map(
        c => { return { key: c.payload.key, ...c.payload.val() }; }

      )

  }

  save(codigo: any) {
    return new Promise((resolve, reject) => {
      if (codigo.key) {
        this.db.list(this.PATH)
          .update(codigo.key, { titulo: codigo.titulo, ling: codigo.ling, cod: codigo.cod })
          .then(() => resolve())
          .catch((e) => reject(e));

      } else {

        this.db.list(this.PATH)
          .push({ titulo: codigo.titulo, ling: codigo.ling, cod: codigo.cod })
          .then(() => resolve());

      }
    })

  }

  remove(key: string) {

    return this.db.list(this.PATH).remove(key);

  }


}
