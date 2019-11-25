import { BrowserModule } from '@angular/platform-browser';
import { FormioModule, FormioAppConfig, FormioService } from 'angular-formio';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingWrapperComponent } from './rating-wrapper/rating-wrapper.component';
import { registerRatingComponent } from './rating-wrapper/rating-wrapper.formio';

@NgModule({
  declarations: [
    AppComponent,
    RatingWrapperComponent
  ],
  imports: [
    FormioModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: FormioAppConfig,
    useValue: {
      appUrl: 'http://localhost:4200/api/v1',
      apiUrl: 'http://localhost:4200/api/v1',
    }
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    RatingWrapperComponent
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRatingComponent(injector);
  }
}
