import { DescricaoPage } from './../pages/descricao/descricao';
import { CodigoPage } from './../pages/codigo/codigo';
import { MenuPage } from './../pages/menu/menu';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CodigoProvider } from '../providers/codigo/codigo';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    CodigoPage,
    DescricaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAWiqaMI0UUeNRZzfr7typLe-6QlQoPr7M",
        authDomain: "mobile-p2.firebaseapp.com",
        databaseURL: "https://mobile-p2.firebaseio.com",
        projectId: "mobile-p2",
        storageBucket: "mobile-p2.appspot.com",
        messagingSenderId: "151160446432"
      }
    ),
    AngularFireDatabaseModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    CodigoPage,
    DescricaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CodigoProvider
  ]
})
export class AppModule { }
