import { Component, OnInit } from '@angular/core';
import {CoreService} from '../../core/core.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'PostUp';
  articles: any;
  article: Object;
  
  constructor(private _service: CoreService) {}
  
  ngOnInit() {
    this.getTopArticles();
  }
  
  getTopArticles() {
    let item: any;
    this._service.getSources().subscribe((response) => {
      item = response.sources[Math.floor(Math.random() * response.sources.length)];
      this._service.getArticlesBySourceId(item.id, 'top').subscribe((res) => {
        this.articles = res.articles;
      });
    });
  }
  
  getArticleContent(article: Object) {
    this.article = article;
  }
}
