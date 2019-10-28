import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { Storage } from "@ionic/storage";

@Injectable()
export class AuthServiceProvider {

  private apiUrls: any = AppConfig;

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  logar(login: Login): Promise<any> {
    let body = "data[Usuario][username]=" + login.username + "&data[Usuario][password]=" + login.password;
    return this.http.post(this.apiUrls.URL + "usuarios/login.json", body, {
      headers: this.getHeader()
    }).toPromise()
  }

  setUser(usuario) {
    this.storage.set("usuario", usuario);
  }

  getUser() {
    return this.storage.get("usuario");
  }

  getHeader() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    )
    return headers;
  }

}
