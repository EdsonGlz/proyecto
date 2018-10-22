import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MiestiloPage } from '../miestilo/miestilo';
import { LoboPage } from '../lobo/lobo';
import { BioPrPage } from '../bio-pr/bio-pr';
import { AlbumPrPage } from '../album-pr/album-pr';
import { BioVePage } from '../bio-ve/bio-ve';
import { AlbumVePageModule } from '../album-ve/album-ve.module';
import { AlbumVePage } from '../album-ve/album-ve';
import { BioUcPage } from '../bio-uc/bio-uc';
import { AlbumEePage } from '../album-ee/album-ee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ME=MiestiloPage;
  Lobo=LoboPage;
  bioPR = BioPrPage;
  albumPR = AlbumPrPage;
  bioVE= BioVePage;
  VEalbum=AlbumVePage;
  UCbio = BioUcPage;
  albumEE=AlbumEePage

  constructor(public navCtrl: NavController) {

  }
  clickMiestilo(){
    this.navCtrl.push(this.ME);

  }

  clickLobo(){
    this.navCtrl.push(this.Lobo);

  }

  clickPR(){
    this.navCtrl.push(this.albumPR);    
  }

  BioPR(){
    this.navCtrl.push(this.bioPR);

  }

  clickVE(){
    this.navCtrl.push(this.bioVE);

  }

  albumVE(){
    this.navCtrl.push(this.VEalbum);


  }

  bioUC(){
    this.navCtrl.push(this.UCbio);

  }
  
  clickEE(){
    this.navCtrl.push(this.albumEE);

  }
  clickRF(){
    this.navCtrl.push(this.albumPR);    
  }

  BioAO(){
    this.navCtrl.push(this.bioPR);

  }





}
