import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AppConfig {
  public static URL = 'https://centralalertas.com.br/';
  public static telefone = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}
