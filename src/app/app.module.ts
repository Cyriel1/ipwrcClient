import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalNavBarComponent } from './horizontal-nav-bar/horizontal-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
