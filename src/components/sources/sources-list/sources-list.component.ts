import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoreService} from '../../../core/core.service';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit, OnDestroy {
  id: string;
  articles: any;
  article: Object;
  private sub: any;
  sortBy: string;
  
  constructor(
    private router: ActivatedRoute,
    private _coreService: CoreService) {
  }
  
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getArticlesBySourceId(params['id']);
    });
  }
  
  getArticlesBySourceId(id: string) {
    this._coreService.getArticlesBySourceId(id).subscribe((response) => {
      this.articles = response.articles;
      this.sortBy = response.sortBy;
    });
  }
  
  getArticleContent(article: Object) {
    this.article = article;
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
