import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
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
    MatDialogModule,
    NgxPaginationModule
  ],
  exports: [
    MatListModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  declarations: []
})
export class SharedModule { }
