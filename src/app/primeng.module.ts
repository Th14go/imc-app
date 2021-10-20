import {NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {CardModule} from 'primeng/card';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({

  exports: [
      InputTextModule,
      ButtonModule,
      InputMaskModule,
      CardModule,
      KeyFilterModule
   ]
})
export class PrimengModule { }
