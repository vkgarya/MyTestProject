import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumpageComponent } from './pages/albumpage/albumpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumpageComponent,
    HomepageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
