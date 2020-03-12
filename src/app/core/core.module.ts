import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    // Angular
    CommonModule,

    // NGRX
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }
    )
  ]
})
export class CoreModule { }
