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
import { BioAoPage } from '../pages/bio-ao/bio-ao';
import { AlbumRfPage } from '../pages/album-rf/album-rf';
import { RuedaFortunaPage } from '../pages/rueda-fortuna/rueda-fortuna';
import { ElElegidoPage } from '../pages/el-elegido/el-elegido';
import { RRmePage } from '../pages/r-rme/r-rme';
import { RLdPage } from '../pages/r-ld/r-ld';
import { RRfPage } from '../pages/r-rf/r-rf';
import { REePage } from '../pages/r-ee/r-ee';

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
    AlbumEePage,
    BioAoPage,
    AlbumRfPage,
    RuedaFortunaPage,
    ElElegidoPage,
    RRmePage,
    RLdPage,
    RRfPage,
    REePage
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
    AlbumEePage,
    BioAoPage,
    AlbumRfPage,
    RuedaFortunaPage,
    ElElegidoPage,
    RRmePage,
    RLdPage,
    RRfPage,
    REePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
