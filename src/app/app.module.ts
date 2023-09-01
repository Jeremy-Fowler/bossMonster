import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BossComponent } from './boss/boss.component';
import { HeroComponent } from './hero/hero.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    BossComponent,
    HeroComponent,
    OffcanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
