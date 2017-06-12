import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, LoaderComponent]
})
export class ComponentsModule { }
