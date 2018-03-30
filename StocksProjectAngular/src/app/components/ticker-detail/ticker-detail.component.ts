import { Component, OnInit } from '@angular/core';
import { IexService } from '../../services/iex.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticker-detail',
  templateUrl: './ticker-detail.component.html',
  styleUrls: ['./ticker-detail.component.css']
})
export class TickerDetailComponent implements OnInit {
  tickerDetail = {};
  historicalMaxPercent = 0;
  notFound = true;
  //
  monthDiff = 0;
  trimesterDiff = 0;
  halfYearDiff = 0;
  yearDiff = 0;
  // 
  _monthDiff = false;
  _trimesterDiff = false;
  _halfYearDiff = false;
  _yearDiff = false;
  constructor(
    private data: IexService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data.getCompanyInfo(this.router.snapshot.paramMap.get('ticker')).subscribe(res => this.tickerDetail = res);
    this.data.getHistoricalData(this.router.snapshot.paramMap.get('ticker')).subscribe(res => {
      console.log(res);
      res.dataset_data.data.reverse();
      let actualPrice = 0;
      let maximusPrice = 0;
      for (let i = 0; i < res.dataset_data.data.length; i++) {
        actualPrice = res.dataset_data.data[i][11];
        if (actualPrice > maximusPrice) {
          maximusPrice = actualPrice;
        }
      }
      console.log({max: maximusPrice, actual: actualPrice});
      this.historicalMaxPercent = Math.abs(((actualPrice / maximusPrice) * 100) - 100);
      // Revaloricación
      const month = res.dataset_data.data[(res.dataset_data.data.length - 1)-20][11];
      const trimestre = res.dataset_data.data[(res.dataset_data.data.length - 1)-60][11];
      const halfYear = res.dataset_data.data[(res.dataset_data.data.length - 1)-120][11];
      const year = res.dataset_data.data[(res.dataset_data.data.length - 1)-240][11];

      this.monthDiff = ((actualPrice - month) / month) * 100;
      this.monthDiff > 0 ? this._monthDiff = true : this._monthDiff = false;

      this.trimesterDiff = ((actualPrice - trimestre) / trimestre) * 100;
      this.trimesterDiff > 0 ? this._trimesterDiff = true : this._trimesterDiff = false;

      this.halfYearDiff = ((actualPrice - halfYear) / halfYear) * 100;
      this.halfYearDiff > 0 ? this._halfYearDiff = true : this._halfYearDiff = false;

      this.yearDiff = ((actualPrice - year) / year) * 100;
      this.yearDiff > 0 ? this._yearDiff = true : this._yearDiff = false;
      this.notFound = false;
    }, err => {
      console.log(err);
      if(err.status == 404) {
        this.notFound = true;
      }
    });
  }

}
