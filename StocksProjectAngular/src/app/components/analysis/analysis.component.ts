import { Component, OnInit } from '@angular/core';
import { IexService } from '../../services/iex.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  list = [];
  constructor(
    private service: IexService
  ) { }

  ngOnInit() {
    this.setDataList("AAPL");
    this.setDataList("MSFT");
  }
  setDataList(ticker: string) {
    let object = { info: {}, data: {} };
    this.service.getCompanyInfo(ticker).subscribe(res => {
      object.info = res;
      this.service.getHistoricalData(ticker).subscribe(res => {
        object.data = res.dataset_data;
        this.list.push(object);
      });
    });
  }
}
