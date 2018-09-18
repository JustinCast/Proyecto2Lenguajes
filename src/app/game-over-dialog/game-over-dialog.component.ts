import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-game-over-dialog",
  templateUrl: "./game-over-dialog.component.html",
  styleUrls: ["./game-over-dialog.component.scss"]
})
export class GameOverDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GameOverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public word: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
