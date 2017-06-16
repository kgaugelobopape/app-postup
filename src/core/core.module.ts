import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreService} from './core.service';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ContainerComponent} from './components/container/container.component';
import {appRoutes} from './core.router';
import {CoreGlobals} from './core.globals';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [NavigationComponent, LoaderComponent, ContainerComponent],
  providers: [CoreService, CoreGlobals],
  exports : [NavigationComponent, LoaderComponent, ContainerComponent]
})
export class CoreModule {
}
