import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class IexService {
  tickers = [];
  constructor(private http: HttpClient) { }

  getTickers():Observable<any> {
    return this.http.get("https://api.iextrading.com/1.0/ref-data/symbols").pipe(
      map((res: any[]) => {
        let arr = [];
        arr = res.filter(data => {
          if (data.type == "cs") {
            return data;
          }
        });
        this.tickers = arr; 
        return arr;
      }));
  }
  getCompanyInfo(ticker: string):Observable<any> {
    return this.http.get("https://api.iextrading.com/1.0/stock/"+ticker+"/company");
  }
  
}
