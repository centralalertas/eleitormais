import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { NoticiaService } from '../../providers/noticia-service/noticia-service'
import { NoticiaPage } from '../noticia/noticia';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  items: string = "noticias";

  public noticicas = [];
  public noticicasDestaques = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private noticiaProvider: NoticiaService, 
    private authProvider: AuthServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    let user = this.authProvider.getUser().then((data:any) => {
      //console.log(data.Usuario.cliente_id);
      this.noticiaProvider.listarNoticiasDestaque(data.Usuario.cliente_id).subscribe((data:any) => {
        console.log(data);
        this.noticicasDestaques = data;
      })
      this.noticiaProvider.listarNoticias(data.Usuario.cliente_id).subscribe((data:any) => {
        console.log(data);
        this.noticicas = data;
      })
    });



  }

  goToNoticia(noticia) {
    this.navCtrl.push(NoticiaPage, {noticia: noticia});
  }

}
