import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CodigoProvider } from '../../providers/codigo/codigo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  codigo: Observable<any>;

  constructor(public navCtrl: NavController, public provider: CodigoProvider) {
    console.log( this.provider.getAll())
    this.codigo = this.provider.getAll();
    
  }

}
