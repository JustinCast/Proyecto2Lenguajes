import { Component, OnInit, ViewChild } from "@angular/core";
import * as data from "./ahorcadoGameWords.json";
import { PageEvent, MatDialog } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DialogService } from "../game-over-dialog/dialog.service";
@Component({
  selector: "app-ahorcado-game",
  templateUrl: "./ahorcado-game.component.html",
  styleUrls: ["./ahorcado-game.component.scss"]
})
export class AhorcadoGameComponent implements OnInit {
  filterargs: string = "";
  p: number = 1;
  words: Array<string> = (<any>data).words;
  hiddenWord: string;
  selectedWord: string;
  hangedFG: FormGroup;
  lifes: number = 6;
  wrongAudio = new Audio();
  doneAudio = new Audio();

  // MatPaginator Output
  pageEvent: PageEvent;
  activePageDataChunk = [];

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private dialogS: DialogService
  ) {
    this.hangedFG = this._fb.group({
      word: ["", [Validators.required, Validators.pattern("^[a-zA-Z]")]]
    });
  }

  replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

  ngOnInit() {
    this.loadWrongAudio();
    this.loadDoneAudio();
  }

  onSubmit() {
    let word = this.hangedFG.controls["word"].value;
    if (!this.selectedWord.includes(word)) {
      this.wrongAudio.play();
      this.removeCssClasses();
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

    if (this.lifes === 0) this.openGameOverDialog();
    if (this.hiddenWord === this.selectedWord) this.openGameWonDialog();

    this.hangedFG.reset();
  }

  removeCssClasses() {
    document.getElementById("lifes-header").classList.add("animated");
    document.getElementById("lifes-header").classList.add("shake");
    setTimeout(function() {
      document.getElementById("lifes-header").classList.remove("animated");
      document.getElementById("lifes-header").classList.remove("shake");
    }, 1000);
  }

  openGameOverDialog() {
    this.dialogS
      .open(
        this.selectedWord,
        "Has perdido",
        true,
        "sentiment_very_dissatisfied"
      )
      .subscribe(() => {
        this.reset();
      });
  }

  openGameWonDialog() {
    this.dialogS
      .open(
        this.selectedWord,
        "Has ganado!\nPrueba a volver a jugar o ingresa tus propias palabras!",
        false,
        "sentiment_very_satisfied"
      )
      .subscribe(() => {
        this.reset();
      });
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
    this.hiddenWord = Array.from(this.words[randomIndex])
      .map(x => (x = "x"))
      .toString()
      .replace(new RegExp(",", "gi"), "");
  }

  reset() {
    this.hiddenWord = undefined;
    this.selectedWord = undefined;
    this.lifes = 6;
  }
}
