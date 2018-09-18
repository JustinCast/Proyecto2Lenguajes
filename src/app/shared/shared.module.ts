import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatStepperModule,
  MatDialogModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDialogModule
  ],
  exports: [
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDialogModule
  ],
  declarations: []
})
export class SharedModule { }
