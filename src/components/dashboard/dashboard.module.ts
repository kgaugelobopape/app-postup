import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import {CoreService} from '../../core/core.service';

@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  declarations: [DashboardComponent],
  providers: [CoreService],
  exports: [DashboardComponent, FormsModule]
})
export class DashboardModule {
}
