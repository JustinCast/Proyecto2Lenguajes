import { Routes } from "@angular/router";
import { AhorcadoGameComponent } from "./ahorcado-game/ahorcado-game.component";
import { SopaLetrasGameComponent } from "./sopa-letras-game/sopa-letras-game.component";
export const ROUTES: Routes = [
    { path: 'ahorcado', component: AhorcadoGameComponent },
    { path: 'sopa-letras', component: SopaLetrasGameComponent },
    { path: '', redirectTo: 'ahorcado', pathMatch: 'full'}
];