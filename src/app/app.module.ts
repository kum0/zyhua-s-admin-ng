import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { APP_CONFIG_PROVIDER } from '@app/config/app.config';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    CoreModule
  ],
  providers   : [APP_CONFIG_PROVIDER],
  bootstrap   : [AppComponent],
})
export class AppModule {
}
