import { Component, OnInit } from '@angular/core';
import { IexService } from '../../services/iex.service';
import { MaterializeDirective } from "angular2-materialize";
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-buscador-tickers-iex',
  templateUrl: './buscador-tickers-iex.component.html',
  styleUrls: ['./buscador-tickers-iex.component.css']
})
export class BuscadorTickersIexComponent implements OnInit {
  lista = [];
  searchList = [];
  paginatedList = [];
  actualPaginationList = [];
  form: FormGroup;
  isSearchingCompany = false;
  searchingCompanyCount = 0;
  searchingPercent = 0;
  actualPage = 0;
  constructor(
    private data: IexService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }
  getTickers() {
    if (this.data.tickers.length > 0) {
      console.log('tickers', this.data.tickers);
      this.lista = this.data.tickers;
    } else {
      this.data.getTickers().subscribe(res => {
        console.log(res);
        this.lista = res;
      });
    }
  }
  createForm() {
    this.form = this.formBuilder.group(
      {
        search: ''
      });
  }
  searchCompany() {
    this.paginatedList = [];
    this.isSearchingCompany = true;
    this.searchingCompanyCount = 0;
    this.searchingPercent = 0;
    this.searchList = [];
    this.searchList = this.lista.filter((res, i, arr) => {
      this.searchingCompanyCount++;
      this.searchingPercent = Math.round((this.searchingCompanyCount / (arr.length - 1)) * 100);
      if (res.symbol.toUpperCase().includes(this.form.controls.search.value.toUpperCase())) {
        return res;
      } else if (res.name.toUpperCase().includes(this.form.controls.search.value.toUpperCase())) {
        return res;
      }
    });
    let arr = [];
    for (let i = 0; i < this.searchList.length; i++) {
      arr.push(this.searchList[i]);
      if (arr.length % 100 == 0) {
        this.paginatedList.push(arr);
        arr = [];
      }
      if (i == this.searchList.length - 1) {
        this.paginatedList.push(arr);
      }
    }
    console.log(this.paginatedList);
    this.isSearchingCompany = false;
    this.actualPaginationList = this.paginatedList[0];
  }
  loadContentPagination(i) {
    this.actualPaginationList = this.paginatedList[i];
    this.actualPage = i;
  }
  prevousPage() {
    if (this.actualPage > 0) {
      this.actualPage--;
    }
    this.actualPaginationList = this.paginatedList[this.actualPage]
  }
  nextPage() {
    if (this.actualPage < this.paginatedList.length - 1) {
      this.actualPage++;
    }
    this.actualPaginationList = this.paginatedList[this.actualPage]
  }
}
