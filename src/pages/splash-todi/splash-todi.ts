import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SplashTodiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash-todi',
  templateUrl: 'splash-todi.html',
})
export class SplashTodiPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    setTimeout(() => {
      let usuario = this.navParams.get('usuario');
      this.navCtrl.setRoot('CreateUserPage', { usuario: usuario });
    }, 3000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashTodiPage');
  }

}
