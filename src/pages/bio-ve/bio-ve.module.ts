import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioVePage } from './bio-ve';

@NgModule({
  declarations: [
    BioVePage,
  ],
  imports: [
    IonicPageModule.forChild(BioVePage),
  ],
})
export class BioVePageModule {}
