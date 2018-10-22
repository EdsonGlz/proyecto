import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioUcPage } from './bio-uc';

@NgModule({
  declarations: [
    BioUcPage,
  ],
  imports: [
    IonicPageModule.forChild(BioUcPage),
  ],
})
export class BioUcPageModule {}
