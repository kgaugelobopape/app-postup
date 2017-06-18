import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  
  constructor(private router: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
