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
  constructor(
    private data: IexService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data.getCompanyInfo(this.router.snapshot.paramMap.get('ticker')).subscribe(res => this.tickerDetail = res)
  }

}
