import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserPage } from './create-user';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { HeaderComponent } from '../../components/header/header';

@NgModule({
  declarations: [
    CreateUserPage,
    HeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(CreateUserPage),
    BrMaskerModule
  ],
  providers: [
    UserServiceProvider
  ]
})
export class CreateUserPageModule { }
