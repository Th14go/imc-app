import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimengModule } from 'src/app/primeng.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
