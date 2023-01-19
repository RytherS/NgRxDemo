import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
  ]
})
export class LoginModule { }
