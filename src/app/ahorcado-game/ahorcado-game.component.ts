import { Component, OnInit, ViewChild } from "@angular/core";
import * as data from "./ahorcadoGameWords.json";
import { PageEvent, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DialogService } from "../game-over-dialog/dialog.service";
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
  lifes: number = 6;
  wrongAudio = new Audio();
  doneAudio = new Audio();

  length = this.words.length;
  pageSize = 4;
  pageSizeOptions: number[] = [4, 5];
  // MatPaginator Output
  pageEvent: PageEvent;
  activePageDataChunk = [];

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private dialogS: DialogService
  ) {
    this.hangedFG = this._fb.group({
      word: [""]
    });
  }

  replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  ngOnInit() {
    this.loadWrongAudio();
    this.loadDoneAudio();
    this.activePageDataChunk = this.words.slice(0, this.pageSize);
  }

  onSubmit() {
    let word = this.hangedFG.controls["word"].value;
    if (!this.selectedWord.includes(word)) {
      this.wrongAudio.play();
      document.getElementById("lifes-header").classList.add("animated");
      document.getElementById("lifes-header").classList.add("shake");
      setTimeout(function() {
        document.getElementById("lifes-header").classList.remove("animated");
        document.getElementById("lifes-header").classList.remove("shake");
      }, 1000);
      this.lifes--;
    } else {
      this.doneAudio.play();
      for (let index = 0; index < this.selectedWord.length; index++)
        if (this.selectedWord[index] === word)
          this.hiddenWord = this.replaceAt(
            this.hiddenWord,
            index,
            this.selectedWord[index]
          );
    }

    if (this.lifes === 0) this.openDialog();

    this.hangedFG.reset();
  }

  openDialog() {
    this.dialogS.open(this.selectedWord).subscribe(result => {
      this.reset();
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(str => +str);
  }

  loadWrongAudio() {
    this.wrongAudio.src = "../../assets/err.mp3";
    this.wrongAudio.load();
  }

  loadDoneAudio() {
    this.doneAudio = new Audio();
    this.doneAudio.src = "../../assets/done.wav";
    this.doneAudio.load();
  }

  genRandom() {
    this.hiddenWord = "";
    let randomIndex = Math.floor(Math.random() * (this.words.length - 1)) + 1;
    this.selectedWord = this.words[randomIndex];
    console.log(this.selectedWord);
    for (let c of this.words[randomIndex]) {
      this.hiddenWord = this.hiddenWord + "x";
    }
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.words.slice(firstCut, secondCut);
  }

  reset() {
    this.hiddenWord = undefined;
    this.selectedWord = undefined;
    this.lifes = 6;
  }
}
