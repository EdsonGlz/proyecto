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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MiestiloPage,
    LoboPage,
    BioPrPage
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
    BioPrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
