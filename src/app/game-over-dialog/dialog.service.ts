import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MatDialogRef, MatDialog } from "@angular/material";
import { GameOverDialogComponent } from "./game-over-dialog.component";
import { InfoDialogComponent } from "../info-dialog/info-dialog.component";
import { DialogData } from "../DialogData";

@Injectable({
  providedIn: "root"
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public open(dialogData: DialogData): Observable<boolean> {
    let dialogRef: MatDialogRef<GameOverDialogComponent>;
    dialogRef = this.dialog.open(GameOverDialogComponent, {
      width: "30%",
      height: "35%",
      data: dialogData
    });

    return dialogRef.afterClosed();
  }

  public openInfoDialog() {
    let dialogRef: MatDialogRef<InfoDialogComponent>;
    dialogRef = this.dialog.open(InfoDialogComponent, {
      width: "40%",
      height: "42%"
    });
    return dialogRef.afterClosed();
  }
}
