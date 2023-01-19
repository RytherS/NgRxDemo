import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { LetModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from 'src/app/core/core.module';
import { LoadingSpinnerModule } from '../shared';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';
import { HOME_FEATURE_KEY } from './state/home.state';
import { PostComponent } from './components/post/post.component';


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
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
    StoreModule.forFeature(HOME_FEATURE_KEY, homeReducer),
    EffectsModule.forFeature(HomeEffects)
  ],
  providers: [
    DataService
  ]
})
export class HomeModule { }
