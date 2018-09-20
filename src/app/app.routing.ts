import { Routes } from "@angular/router";
import { AhorcadoGameComponent } from "./ahorcado-game/ahorcado-game.component";
export const ROUTES: Routes = [
    { path: 'ahorcado', component: AhorcadoGameComponent },
    { path: '', redirectTo: 'ahorcado', pathMatch: 'full'}
];