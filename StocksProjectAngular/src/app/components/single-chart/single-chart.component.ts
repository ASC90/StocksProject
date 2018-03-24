import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-chart',
  templateUrl: './single-chart.component.html',
  styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log('data', this.data);
  }

}
