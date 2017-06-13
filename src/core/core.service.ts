import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {
  baseUrl = 'https://newsapi.org/v1';
  articles: string;
  sources: string;
  apiKey: string;
  
  constructor() {
    this.articles = this.baseUrl + '/articles';
    this.sources = this.baseUrl + '/sources';
    this.apiKey = 'dcf4480f211c48fa943c3b28ba798ef7';
  }
}
