import {Injectable} from '@angular/core';

@Injectable()
export class CoreService {
  
  SERVICE_BASE_URI = 'GET https://newsapi.org/v1';
  
  constructor() {
  }
  
  public get BASE_URI() {
    return this.SERVICE_BASE_URI;
  }
  
  public get ARTICLES_URL() {
    return this.SERVICE_BASE_URI + '/article';
  }
  
  public get SOURCE_URL() {
    return this.SERVICE_BASE_URI + '/source';
  }
  
  public get API_KEY() {
    return 'dcf4480f211c48fa943c3b28ba798ef7';
  }
}
