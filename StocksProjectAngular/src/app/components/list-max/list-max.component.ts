import { Component, OnInit } from '@angular/core';
import { IexService } from '../../services/iex.service';

@Component({
  selector: 'app-list-max',
  templateUrl: './list-max.component.html',
  styleUrls: ['./list-max.component.css']
})
export class ListMaxComponent implements OnInit {
  list = [];
  constructor(
    private service: IexService
  ) { }

  ngOnInit() {
    this.service.getTickers().subscribe(res => {
      console.log(res);
      let index = 0;
      let interval = setInterval(() => {
        console.log(res[index]);
        let companyInfo = res[index];
        this.service.getHistoricalData(companyInfo.symbol).subscribe(pres => {
          console.log(pres);
          this.getMaximumHistoric(pres, companyInfo);
          this.list.sort(function(a,b){return a.max - b.max;});
          this.service.maximus = this.list;
        }, err => {
          this.list.push({ ticker: companyInfo.symbol, max: 404 });
        });
        if (index < res.length - 1) {
          index++;
        } else {
          clearInterval(interval);
        }
      }, 500);
    })
  }
  getMaximumHistoric(data, info) {
    data.dataset_data.data.reverse();
    let actualPrice = 0;
    let maximusPrice = 0;
    for (let i = 0; i < data.dataset_data.data.length; i++) {
      actualPrice = data.dataset_data.data[i][11];
      if (actualPrice > maximusPrice) {
        maximusPrice = actualPrice;
      }
    }
    let max = Math.abs(((actualPrice / maximusPrice) * 100) - 100);
    this.list.push({ ticker: info.symbol, max: max });
    console.log(this.list);
  }
}
