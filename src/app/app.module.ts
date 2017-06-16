import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from '../core/core.module';
import {DashboardModue} from '../components/dashboard/dashboard.module';
import {SourcesModule} from '../components/sources/sources.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModue,
    SourcesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
