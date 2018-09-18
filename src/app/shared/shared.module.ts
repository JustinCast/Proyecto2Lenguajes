import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatStepperModule
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
    MatStepperModule
  ],
  exports: [
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule
  ],
  declarations: []
})
export class SharedModule { }
