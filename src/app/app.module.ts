import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { CreateUserPageModule } from '../pages/create-user/create-user.module';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SplashTodiPageModule } from '../pages/splash-todi/splash-todi.module';
import { TabPage } from '../pages/tab/tab';
import { AlertasPage } from '../pages/alertas/alertas';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CompromissosPage } from '../pages/compromissos/compromissos';
import { EventosPage } from '../pages/eventos/eventos';
import { OutrosPage } from '../pages/outros/outros';
import { HomePageModule } from '../pages/home/home.module';
import { TabPageModule } from '../pages/tab/tab.module';
import { EventosPageModule } from '../pages/eventos/eventos.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { AlertasPageModule } from '../pages/alertas/alertas.module';
import { OutrosPageModule } from '../pages/outros/outros.module';
import { CompromissosPageModule } from '../pages/compromissos/compromissos.module';
import { NoticiaService } from '../providers/noticia-service/noticia-service';
import { NoticiaPageModule } from '../pages/noticia/noticia.module';
import { NoticiaPage } from '../pages/noticia/noticia';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    CreateUserPageModule,
    SplashTodiPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(
      {
        name: '__mydb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),
    FormsModule,
    BrMaskerModule, 
    HomePageModule, 
    TabPageModule,
    AlertasPageModule, 
    CadastroPageModule,
    EventosPageModule, 
    OutrosPageModule,
    CompromissosPageModule, 
    NoticiaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    TabPage, 
    AlertasPage,
    CadastroPage,
    CompromissosPage,
    EventosPage,
    OutrosPage, 
    NoticiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserServiceProvider,
    AuthServiceProvider,
    NoticiaService
  ]
})
export class AppModule { }
