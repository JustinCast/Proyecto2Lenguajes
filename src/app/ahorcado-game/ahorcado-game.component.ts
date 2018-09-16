import { Component, OnInit } from '@angular/core';
import * as data from "./ahorcadoGameWords.json";
@Component({
  selector: 'app-ahorcado-game',
  templateUrl: './ahorcado-game.component.html',
  styleUrls: ['./ahorcado-game.component.scss']
})
export class AhorcadoGameComponent implements OnInit {
  words: Array<string> = (<any>data).words;
  constructor() { }

  ngOnInit() {
    console.log(this.words);
  }

}
