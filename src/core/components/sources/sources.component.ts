import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../core.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  title = 'PostUp';
  sources: any = [];
  queryText: string;
  
  constructor(private _service: CoreService) {}
  
  ngOnInit() {
    this._service.getSources().subscribe((response) => {
      this.sources = response.sources;
    });
  }
  
  presentFilter() {
  }
}
