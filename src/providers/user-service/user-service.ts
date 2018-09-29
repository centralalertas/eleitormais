import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';
import { Storage } from "@ionic/storage";
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  apiUrls: any = AppConfig;
  grupos: any = [];

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {

  }

  listarMinicipios(uf: any) {
    return this.http.get(this.apiUrls.URL + "municipios/listar/" + uf + ".json", {
      headers: this.getHeader()
    })
  }

  listarGrupos(user): any {
    let body  = "username=" + user;
    return this.http.post(this.apiUrls.URL + "usuarios/gruposUsuario.json", body, {
      headers: this.getHeader()
    })

  }

  listarUfs(): Observable<any> {
    return this.http.get('assets/data/ufs.json', {
      headers: this.getHeader()
    })
  }

  createUser(user: Usuario): Observable<any> {
    let body =
      "cliente_id=" + user.cliente_id +
      "&usuario_id=" + user.usuario_id +
      "&nome=" + user.nome +
      "&celular=" + user.telefone +
      "&sobrenome=" + user.sobrenome +
      "&email=" + user.email +
      "&telefone=" + user.celular +
      "&sexo=" + user.sexo +
      "&aniversario=" + user.aniversario +
      "&filho=" + user.filho +
      "&uf=" + user.uf +
      "&cidade=" + user.cidade +
      "&grupo=" + user.grupo;
    return this.http.post(this.apiUrls.URL + "contatos.json", body, {
      headers: this.getHeader()
    })
  }

  getHeader() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    )
    return headers;
  }

}
