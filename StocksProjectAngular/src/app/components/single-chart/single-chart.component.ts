import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-single-chart',
  templateUrl: './single-chart.component.html',
  styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit, OnChanges {
  @Input() data: any;
  chartResults = [{
    name: 'Price',
    series: []
  }];
  list = [];
  hasLoaded = false;
  percentHistoric: number;
  constructor() { }

  ngOnInit() { 
  }
  ngOnChanges(cambio: SimpleChanges) {
    this.generateGraphic();
    this.getMaximusHistoric();
  }
  generateGraphic() {
    this.chartResults = [{
      name: 'Price',
      series: []
    }];
    this.list = [];
    for (const item in this.data['Time Series (Daily)']) {
      if (item) {
        this.list.push(this.data['Time Series (Daily)'][item]);
        this.chartResults[0].series.push({
          name: item,
          value: this.data['Time Series (Daily)'][item]['5. adjusted close']
        })
      }
    }
    this.chartResults[0].series.reverse();
    this.hasLoaded = true;
  }
  getMaximusHistoric() {
    console.log(this.data);
    let minimum: number;
    let maximum: number;
    let actual: number;
    let diference: number;
    for (const item in this.data['Time Series (Daily)']) {
      if (item) {
        if (!minimum) {
          minimum = parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']) < minimum) {
          minimum = parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (!maximum) {
          maximum = parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']) > maximum) {
          maximum = parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (!actual) {
          actual = parseFloat(this.data['Time Series (Daily)'][item]['5. adjusted close']);
        }
      }
    }
    diference = ((maximum - actual) / maximum) * 100;
    console.log({max: maximum, min: minimum, act: actual});
    this.percentHistoric = diference;
  }
}
