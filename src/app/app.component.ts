import { Component, ViewChild } from '@angular/core';
import { Platform, LoadingController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from "@ionic/storage";
import { Usuario } from '../models/usuario';
import { TabPage } from '../pages/tab/tab';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) nav: Nav;
  public usuario = new Usuario();

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage,
    public loadingController: LoadingController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let loading = loadingController.create({
        content: "Aguarde..."
      });
      storage.get("usuario").then((res : Usuario) => {
        if (res) {
          loading.dismiss();
          this.usuario = res;
          this.rootPage = TabPage;
        } else {
          loading.dismiss();
          this.rootPage = 'LoginPage';
        }
      });
    });
  }

  logout() {
    this.nav.setRoot('LoginPage');
  }

  create() {
    this.nav.setRoot('CreateUserPage', { usuario: this.usuario });
  }
}

