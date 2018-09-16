import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AhorcadoGameComponent } from './ahorcado-game/ahorcado-game.component';
import { SopaLetrasGameComponent } from './sopa-letras-game/sopa-letras-game.component';

@NgModule({
  declarations: [AppComponent, AhorcadoGameComponent, SopaLetrasGameComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
