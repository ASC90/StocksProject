import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLoading = false;
  list = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
  }
  loadTest() {
    this.isLoading =  true;
    this.testService.getSimpleJson().subscribe(res => {
      // console.log(res);
      // console.log(res['Time Series (1min)']);
      for (const item in res['Time Series (1min)']) {
        if (item) {
          // console.log(res['Time Series (1min)'][item]['1. open']);
          this.list.push(res['Time Series (1min)'][item]);
        }
      }
      this.isLoading = false;
    });
  }
}
