import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from '../core/core.module';
import {DashboardModule} from '../components/dashboard/dashboard.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SourcesModule} from '../components/sources/sources.module';
import {MdProgressBarModule} from '@angular2-material/progress-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    FormsModule,
    HttpModule,
    SourcesModule,
    MdProgressBarModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
