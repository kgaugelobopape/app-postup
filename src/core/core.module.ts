import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreService} from './core.service';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ContainerComponent} from './components/container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, LoaderComponent, ContainerComponent],
  providers: [CoreService],
  exports : [NavigationComponent, LoaderComponent, ContainerComponent]
})
export class CoreModule {
}
