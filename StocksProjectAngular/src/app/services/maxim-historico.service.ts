import { Injectable } from '@angular/core';
import { KeyService } from './key.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class MaximHistoricoService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
  };
  listaDeMaximos = [];
  constructor(
    private key: KeyService,
    private http: HttpClient
  ) { }
  getData(symbol: string): Observable<any> {
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+ symbol +'&outputsize=full&apikey=' + this.key.KEY);
  }
  getTickers(): Observable<any> {
    return this.http.get ('https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed_csv_preview/data/912e17895ba8c06ea38b08e94b5feb92/nasdaq-listed_csv_preview.json');
  }
}
