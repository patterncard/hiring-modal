import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { CareerComponent } from './components/career/career.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscordButtonComponent } from './components/discord-button/discord-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    DiscordButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({ mode: 'ios' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
