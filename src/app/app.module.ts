import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ROUTES } from "./app.routing";
import { AhorcadoGameComponent } from "./ahorcado-game/ahorcado-game.component";
import { SopaLetrasGameComponent } from "./sopa-letras-game/sopa-letras-game.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { SearchWordPipe } from './search-word.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AhorcadoGameComponent,
    SopaLetrasGameComponent,
    GameOverDialogComponent,
    SearchWordPipe
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    GameOverDialogComponent
  ],
  providers: [],
  bootstrap: [AhorcadoGameComponent]
})
export class AppModule {}
