import { Component, OnInit } from '@angular/core';
import {CoreService} from '../../core/core.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'PostUp';
  sources: any = [];
  queryText: string;
  
  constructor(private _service: CoreService) { }

  ngOnInit() {
    this.updateSource();
  }
  
  updateSource() {
    this._service.getSources().subscribe((response) => {
      this.sources = response.sources;
    });
  }
  
  presentFilter() {
  
    this.sources = _.where(this.sources, {name: this.queryText});
  }
  
  go
}
