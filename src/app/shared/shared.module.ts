import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';

const MATERIAL = [
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MATERIAL
  ],
  exports: [
    FlexLayoutModule,
    MATERIAL
  ]
})
export class SharedModule { }
