import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
