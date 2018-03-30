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
    });
  }

}
