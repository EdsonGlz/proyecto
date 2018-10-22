import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MiestiloPage } from '../pages/miestilo/miestilo';
import { LoboPage } from '../pages/lobo/lobo';
import { BioPrPage } from '../pages/bio-pr/bio-pr';
import { AlbumPrPage } from '../pages/album-pr/album-pr';
import { AlbumPrPageModule } from '../pages/album-pr/album-pr.module';
import { BioVePage } from '../pages/bio-ve/bio-ve';
import { AlbumVePage } from '../pages/album-ve/album-ve';
import { BioUcPage } from '../pages/bio-uc/bio-uc';
import { AlbumEePage } from '../pages/album-ee/album-ee';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MiestiloPage,
    LoboPage,
    BioPrPage,
    AlbumPrPage,
    BioVePage,
    AlbumVePage,
    BioUcPage,
    AlbumEePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MiestiloPage,
    LoboPage,
    BioPrPage,
    AlbumPrPage,
    BioVePage,
    AlbumVePage,
    BioUcPage,
    AlbumEePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
