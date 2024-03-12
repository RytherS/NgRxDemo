import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LetModule } from '@ngrx/component';
import { CoreModule } from 'src/app/core/core.module';
import { PostComponent } from './components/post/post.component';
import { LoadingSpinnerModule } from '../shared';


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LoadingSpinnerModule,
    LetModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }])
  ],
  providers: [
    DataService
  ]
})
export class HomeModule { }
