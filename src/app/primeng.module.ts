import {NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({

  exports: [
      InputTextModule,
      ButtonModule
   ]
})
export class PrimengModule { }
