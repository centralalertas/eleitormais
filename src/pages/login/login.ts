import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { Login } from '../../models/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  login = new Login();
  formLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: AuthServiceProvider,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public formBuilder: FormBuilder,

  ) {
  }

  ngOnInit() {
    this.validarCampos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validarCampos() {
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.formLogin = this.formBuilder.group({
      username: new FormControl(this.login.username, [Validators.required, Validators.minLength(2), Validators.pattern(emailPattern)]),
      password: new FormControl(this.login.password, [Validators.required, Validators.minLength(2)])
    })
  }

  erroLogin(message: string) {
    let alert = this.alertController.create({
      title: '<div align="center">Atenção</div><br>',
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  logar() {
    let loading = this.loadingController.create({
      content: "Aguarde..."
    });
    loading.present();
    this.loginService.logar(this.login).subscribe(
      res => {
        if (res.Usuario) {
          loading.dismiss();
          this.loginService.setUser(res);
          this.navCtrl.setRoot('CreateUserPage', { usuario: res });
        }
        if (res == '') {
          loading.dismiss();
          let message = "Usuário ou senha inválidos";
          this.erroLogin(message);
          this.formLogin.reset();
        }
      }
    )
  }

}
