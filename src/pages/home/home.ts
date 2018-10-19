import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiestiloPage } from '../miestilo/miestilo';
import { LoboPage } from '../lobo/lobo';
import { BioPrPage } from '../bio-pr/bio-pr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ME=MiestiloPage;
  Lobo=LoboPage;
  bioPR = BioPrPage;

  constructor(public navCtrl: NavController) {

  }
  clickMiestilo(){
    this.navCtrl.push(this.ME);

  }

  clickLobo(){
    this.navCtrl.push(this.Lobo);

  }

  clickPR(){
    this.navCtrl.push(this.bioPR);    
  }



}
