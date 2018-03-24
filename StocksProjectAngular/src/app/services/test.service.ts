import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
  };
  constructor(
    private key: KeyService,
    private http: HttpClient
  ) { }
  getSimpleJson(): Observable<any> {
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=' + this.key.KEY);
  }
}
