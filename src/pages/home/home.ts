import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiestiloPage } from '../miestilo/miestilo';
import { LoboPage } from '../lobo/lobo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ME=MiestiloPage;
  Lobo=LoboPage;

  constructor(public navCtrl: NavController) {

  }
  clickMiestilo(){
    this.navCtrl.push(this.ME);

  }

  clickLobo(){
    this.navCtrl.push(this.Lobo);

  }



}
