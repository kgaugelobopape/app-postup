/**
 * Created by kgaugelobopape on 2017/06/14.
 */

import {Injectable} from '@angular/core';
import construct = Reflect.construct;

@Injectable()
export class CoreGlobals {
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
