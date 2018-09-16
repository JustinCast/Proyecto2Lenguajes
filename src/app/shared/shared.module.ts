import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class SharedModule { }
