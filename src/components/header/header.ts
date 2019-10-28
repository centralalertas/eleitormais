import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(
    public navController: NavController,
    public storage: Storage
  ) {
    
  }

  logout() {
    this.navController.setRoot('LoginPage');
    this.storage.clear();
  }

}
