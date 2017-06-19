import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoreGlobals} from './core.globals';

@Injectable()
export class CoreService {
  constructor(private http: Http, private _constant: CoreGlobals) {
  }
  
  getSources(): Observable<any> {
    if (this._constant.debug) {
      return this.http.get('../assets/data/sources.json').map((res: Response) => res.json());
    } else {
      return this.http.get(this._constant.sources).map((res: Response) => res.json());
    }
  }
  
  getArticlesBySourceId(id: string) {
    if (this._constant.debug) {
      return this.http.get('../assets/data/articles.json').map((res: Response) => res.json());
    } else {
      const url = this._constant.articles + '?source=' + id + '&apikey=' + this._constant.apiKey;
      return this.http.get(url).map((res: Response) => res.json());
    }
  }
}
