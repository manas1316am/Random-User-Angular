import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HTTP
import {HttpClientModule} from "@angular/common/http"
// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Font Awesome
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FontAwesomeModule, // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
