import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { GameOverDialogComponent } from './game-over-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  public open(word: string): Observable<boolean> {
    let dialogRef: MatDialogRef<GameOverDialogComponent>;
    dialogRef = this.dialog.open(GameOverDialogComponent, {
      width: "30%",
      height: "35%",
      data: word
    });

    return dialogRef.afterClosed();
  }
}
