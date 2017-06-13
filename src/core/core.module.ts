import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreService} from './core.service';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, LoaderComponent],
  providers: [CoreService],
  exports : [NavigationComponent, LoaderComponent]
})
export class CoreModule {
}
