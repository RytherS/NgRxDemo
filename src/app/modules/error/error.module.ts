import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild([{ path: "", component: ErrorComponent }])
  ]
})
export class ErrorModule { }
