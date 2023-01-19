import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, UserService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CORE_FEATURE_KEY } from './state/core.state';
import { coreReducer } from './state/core.reducer';
import { coreEffects } from './state/core.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CORE_FEATURE_KEY, coreReducer),
    EffectsModule.forFeature([...coreEffects])
  ],
  providers: [
    UserService,
    DataService
  ]
})
export class CoreModule { }
