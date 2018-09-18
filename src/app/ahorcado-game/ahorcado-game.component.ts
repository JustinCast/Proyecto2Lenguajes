import { Component, OnInit, ViewChild } from "@angular/core";
import * as data from "./ahorcadoGameWords.json";
import { PageEvent } from "@angular/material";
@Component({
  selector: "app-ahorcado-game",
  templateUrl: "./ahorcado-game.component.html",
  styleUrls: ["./ahorcado-game.component.scss"]
})
export class AhorcadoGameComponent implements OnInit {
  words: Array<string> = (<any>data).words;
  selectedWord: string;
  length = this.words.length;
  pageSize = 4;
  pageSizeOptions: number[] = [4, 5];

  // MatPaginator Output
  pageEvent: PageEvent;
  activePageDataChunk = [];

  constructor() {}

  ngOnInit() {
    console.log(this.words);
    this.activePageDataChunk = this.words.slice(0, this.pageSize);
    console.log(this.activePageDataChunk);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  genRandom() {
    this.selectedWord = '';
    let randomIndex = Math.floor(Math.random() * (this.words.length - 1)) + 1;
    console.log(this.words[randomIndex]);
    for (let c of this.words[randomIndex]) {
      this.selectedWord = this.selectedWord + 'x';
    }
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.words.slice(firstCut, secondCut);
  }
}
