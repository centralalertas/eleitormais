import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { Storage } from "@ionic/storage";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {


  apiUrls: any = AppConfig;

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  logar(login: Login): Observable<any> {
    let body = "data[Usuario][username]=" + login.username + "&data[Usuario][password]=" + login.password;
    return this.http.post(this.apiUrls.URL + "usuarios/login.json", body, {
      headers: this.getHeader()
    })
  }

  setUser(usuario) {
    this.storage.set("usuario", usuario);
  }

  getHeader() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    )
    return headers;
  }

}
