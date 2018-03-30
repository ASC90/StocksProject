import { Component, OnInit } from '@angular/core';
import { IexService } from '../../services/iex.service';

@Component({
  selector: 'app-cache-list',
  templateUrl: './cache-list.component.html',
  styleUrls: ['./cache-list.component.css']
})
export class CacheListComponent implements OnInit {
  list = [];
  constructor(
    private service: IexService
  ) { }

  ngOnInit() {
    this.list = this.service.maximus;
  }

}
