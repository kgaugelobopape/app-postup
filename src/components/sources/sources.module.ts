/**
 * Created by kgaugelobopape on 2017/06/18.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SourcesListComponent} from './sources-list/sources-list.component';
import {SourcesModalComponent} from './sources-modal/sources-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SourcesListComponent, SourcesModalComponent],
  providers: [],
  exports: [SourcesModalComponent, SourcesListComponent]
})
export class SourcesModule {}
