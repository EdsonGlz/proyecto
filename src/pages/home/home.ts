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
import { AlbumRfPage } from '../album-rf/album-rf';
import { BioAoPage } from '../bio-ao/bio-ao';
import { RuedaFortunaPage } from '../rueda-fortuna/rueda-fortuna';
import { ElElegidoPage } from '../el-elegido/el-elegido';
import { REePage } from '../r-ee/r-ee';
import { RLdPage } from '../r-ld/r-ld';
import { RRmePage } from '../r-rme/r-rme';
import { RRfPage } from '../r-rf/r-rf';

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
  albumEE=AlbumEePage;
  albumRf=AlbumRfPage;
  BioAo=BioAoPage
  RF=RuedaFortunaPage;
  EE=ElElegidoPage;
  ResEE= REePage;
  ResLD=RLdPage;
  ResRME=RRmePage;
  ResRF=RRfPage;

  constructor(public navCtrl: NavController) {

  }
  clickMiestilo(){
    this.navCtrl.push(this.ME);

  }

  clickRuedaFortuna(){
    this.navCtrl.push(this.RF);

  }

  clickElElegido(){
    this.navCtrl.push(this.EE);

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

  clickREestrella(){
    this.navCtrl.push(this.ResRME);

  }

  clickRLD(){
    this.navCtrl.push(this.ResLD);
  }

  clickRRF(){
    this.navCtrl.push(this.ResRF);

  }

  clickREE(){
    this.navCtrl.push(this.ResEE);

  }

  bioUC(){
    this.navCtrl.push(this.UCbio);

  }
  
  clickEE(){
    this.navCtrl.push(this.albumEE);

  }
  clickRF(){
    this.navCtrl.push(this.albumRf);    
  }

  BioAO(){
    this.navCtrl.push(this.BioAo);

  }





}
