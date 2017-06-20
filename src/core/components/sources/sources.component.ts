import {Component, OnInit, Input} from '@angular/core';
import {CoreService} from '../../core.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  title = 'PostUp';
  sources: any = [];
  queryText: string;
  
  constructor(private _service: CoreService) {
  }
  
  ngOnInit() {
    this._service.getSources().subscribe((response) => {
      this.sources = response.sources;
    });
  }
  
  presentFilter(queryText) {
    if (!_.isEmpty(queryText)) {
      this.sources = _.filter(this.sources, function (source) {
        const name = source.name.toLowerCase();
        return name.indexOf(queryText.toLowerCase()) !== -1;
      });
    } else {
      this.ngOnInit();
    }
  }
}
