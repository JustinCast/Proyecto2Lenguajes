import { Component, OnInit, ViewChild } from "@angular/core";
import * as data from "./ahorcadoGameWords.json";
import { PageEvent } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-ahorcado-game",
  templateUrl: "./ahorcado-game.component.html",
  styleUrls: ["./ahorcado-game.component.scss"]
})
export class AhorcadoGameComponent implements OnInit {
  words: Array<string> = (<any>data).words;
  hiddenWord: string;
  selectedWord: string;
  hangedFG: FormGroup;

  length = this.words.length;
  pageSize = 4;
  pageSizeOptions: number[] = [4, 5];
  // MatPaginator Output
  pageEvent: PageEvent;
  activePageDataChunk = [];

  constructor(private _fb: FormBuilder) {
    this.hangedFG = this._fb.group({
      'word': ['']
    });
  }

  ngOnInit() {
    this.activePageDataChunk = this.words.slice(0, this.pageSize);
  }

  onSubmit() {
    console.log(this.hangedFG.controls['word'].value);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  genRandom() {
    this.hiddenWord = '';
    let randomIndex = Math.floor(Math.random() * (this.words.length - 1)) + 1;
    this.selectedWord = this.words[randomIndex];
    for (let c of this.words[randomIndex]) {
      this.hiddenWord = this.hiddenWord + 'x';
    }
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.words.slice(firstCut, secondCut);
  }
}
