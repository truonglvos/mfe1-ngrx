import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe1Com1Component } from './mfe1-com1/mfe1-com1.component';
import { Mfe1Com2Component } from './mfe1-com2/mfe1-com2.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { Mfe1Effect } from './states/mfe1/mfe1.effect';
import * as mfe1Reducer from './states/mfe1/mfe1.reducer';
import { IMAGE_DOMAIN, SHELL_DOMAIN } from './constants/common';
import { ImageDirective } from './directives/image.directive';
import { BgImageDirective } from './directives/bg-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    Mfe1Com1Component,
    Mfe1Com2Component,
    ImageDirective,
    BgImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature('mfe1', mfe1Reducer.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forFeature([Mfe1Effect]),
  ],
  providers: [
    { provide: IMAGE_DOMAIN, useValue: process.env['MFE1_URL'] || '' },
    { provide: SHELL_DOMAIN, useValue: process.env['SHELL_URL'] || '' },
  ],
  bootstrap: [AppComponent],
})
export class Mfe1Module {}
