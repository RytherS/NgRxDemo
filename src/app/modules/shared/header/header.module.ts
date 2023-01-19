import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LetModule } from '@ngrx/component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LetModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
