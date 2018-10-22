import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumVePage } from './album-ve';

@NgModule({
  declarations: [
    AlbumVePage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumVePage),
  ],
})
export class AlbumVePageModule {}
