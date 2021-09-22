import {NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({

  exports: [
      InputTextModule,
      ButtonModule,
      InputMaskModule
   ]
})
export class PrimengModule { }
