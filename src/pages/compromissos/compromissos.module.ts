import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompromissosPage } from './compromissos';

@NgModule({
  declarations: [
    CompromissosPage,
  ],
  imports: [
    IonicPageModule.forChild(CompromissosPage),
  ],
})
export class CompromissosPageModule {}
