import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';

/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaService {
  
  private apiUrls: any = AppConfig;

  constructor(private http: HttpClient) {
    console.log('Hello NoticiaService Provider');
  }
  
  listarNoticiasDestaque(cliente_id: any) {
    let body = "data[Noticia][cliente_id]=" +cliente_id;
    return this.http.post(this.apiUrls.URL + "noticias/getNoticiasDestaque.json", body ,{
      headers: this.getHeader()
    })
  }

  listarNoticias(cliente_id: any) {
    let body = "data[Noticia][cliente_id]=" +cliente_id;
    return this.http.post(this.apiUrls.URL + "noticias/getNoticias.json", body ,{
      headers: this.getHeader()
    })
  }

  private getHeader() {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    )
    return headers;
  }


}
