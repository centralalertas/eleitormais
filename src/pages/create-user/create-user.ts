import {
  AlertController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuario } from "../../models/usuario";
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { AppConfig } from "../../providers/app.config";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";

import { Storage } from "@ionic/storage";
import { Grupos } from "../../models/grupos";

/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-user",
  templateUrl: "create-user.html"
})
export class CreateUserPage implements OnInit {
  appConfig: any = AppConfig;

  form: boolean = false;

  formUsuario: FormGroup;

  public user = new Usuario();

  estados: any = [];
  municipios: any = [];
  botao: boolean = false;
  botaoLogin: boolean = false;
  grupos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public storage: Storage
  ) {
    if (this.navParams.get("usuario")) {
      let usuario = this.navParams.get("usuario");
      this.user.cliente_id = usuario.cliente_id;
      this.user.usuario_id = usuario.id;
    }
  }

  ngOnInit() {
    this.validarCampos();
    this.listarUfs();
    this.listarGrupos();
  }

  listarGrupos() {
    this.storage.get("usuario").then(user => {
      this.userService.listarGrupos(user.Usuario.username).subscribe(grupos => {
        this.grupos = grupos;
      });
    });
  }

  validarCampos() {
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    this.formUsuario = this.formBuilder.group({
      nome: new FormControl(this.user.nome, [
        Validators.required,
        Validators.minLength(2)
      ]),
      sobreNome: new FormControl(this.user.sobrenome, [
        Validators.required,
        Validators.minLength(2)
      ]),
      celular: new FormControl(this.user.celular),
      email: new FormControl(this.user.email),
      telefone: new FormControl(""),
      sexo: new FormControl(""),
      aniversario: new FormControl(""),
      filho: new FormControl(""),
      uf: new FormControl(""),
      municipio: new FormControl(""),
      grupo: new FormControl("")
    });
  }

  listarMunicipios(event: any) {
    this.userService.listarMinicipios(this.user.uf).subscribe(res => {
      this.municipios = res;
    });
  }

  listarUfs() {
    this.userService.listarUfs().subscribe(res => {
      this.estados = res.ufs;
    });
  }

  success(message: string) {
    let alert = this.alertController.create({
      title: '<div align="center">Atenção</div><br>',
      subTitle: message,
      buttons: ["OK"]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateUserPage");
  }

  enableInputs() {
    if (this.form) {
      this.form = false;
    } else {
      this.form = true;
    }
  }

  toastMessage() {
    let toast = this.toastController.create({
      message: "NECESSÁRIO PREENCHER O CAMPO CELULAR OU E-MAIL!",
      duration: 3000,
      position: "bottom",
      cssClass: "toast-message"
    });
    toast.present();
  }

  salvarUsuario(user: Usuario) {
    let loading = this.loadingController.create({
      content: "Aguarde..."
    });
    loading.present();
    this.userService.createUser(user).subscribe(
      res => {
        if (res.message) {
          loading.dismiss();
          this.formUsuario.reset();
          this.user = new Usuario();
          let message = "Cadastrado com sucesso!";
          this.success(message);
        }
      },
      error => {
        loading.dismiss();
        console.log(error);
      }
    );
  }

  cadastrar() {
    if (!this.user.telefone && !this.user.email) {
      this.toastMessage();
    } else if (this.user.telefone || !this.user.email) {
      if (this.user.telefone) {
        this.user.telefone.replace(/\D+/g, "");
      }
      if (this.user.celular) {
        let celular = this.user.celular.replace(/\D+/g, "");
        this.user.celular = celular;
      }
      this.salvarUsuario(this.user);
    } else if (this.user.email || !this.user.celular) {
      this.salvarUsuario(this.user);
    }
  }
}
