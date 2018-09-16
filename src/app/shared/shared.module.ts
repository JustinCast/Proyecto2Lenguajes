import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatListModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class SharedModule { }
