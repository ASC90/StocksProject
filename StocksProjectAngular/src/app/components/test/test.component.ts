import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
// charts
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLoading = false;
  list = [];
  chartResults = [{
    name: 'Volume',
    series: []
  }];
  chartCompleted = false;
  constructor(private testService: TestService) {
  }

  ngOnInit() {
  }
  loadTest() {
    this.chartCompleted = false;
    this.isLoading = true;
    this.testService.getSimpleJson().subscribe(res => {
      // console.log(res);
      // console.log(res['Time Series (15min)']);
      for (const item in res['Time Series (15min)']) {
        if (item) {
          // console.log(res['Time Series (15min)'][item]['1. open']);
          this.list.push(res['Time Series (15min)'][item]);
          this.chartResults[0].series.push({
            name: item,
            value: res['Time Series (15min)'][item]['5. volume']
          })
        }
      }
      this.chartResults[0].series.reverse();
      let acumulatedVolume = 0;
      let actualVolume = 0;
      for (let i = 0; i < this.chartResults[0].series.length; i++) {
        actualVolume = parseInt(this.chartResults[0].series[i].value);
        acumulatedVolume += actualVolume;
        this.chartResults[0].series[i].value = acumulatedVolume;
      }
      console.log('chart results', this.chartResults);
      this.chartCompleted = true;
      this.isLoading = false;
    });
  }
}
