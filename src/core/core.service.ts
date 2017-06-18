import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CoreService {
  constructor(private http: Http) {
  }
  
  getSources(): Observable<any> {
    return this.http.get('../../assets/data/sources.json').map((res: Response) => res.json());
  }
}
