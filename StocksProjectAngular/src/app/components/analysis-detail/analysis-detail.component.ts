import { Component, OnInit, Input } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";

@Component({
  selector: 'app-analysis-detail',
  templateUrl: './analysis-detail.component.html',
  styleUrls: ['./analysis-detail.component.css']
})
export class AnalysisDetailComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log('data son', this.data);
  }

}
