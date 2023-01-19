import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ErrorComponent }])
  ]
})
export class ErrorModule { }
