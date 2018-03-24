import { Component, OnInit } from '@angular/core';
import { MaximHistoricoService } from '../../services/maxim-historico.service';
import {MaterializeDirective} from "angular2-materialize";
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-maximo-historico',
  templateUrl: './maximo-historico.component.html',
  styleUrls: ['./maximo-historico.component.css']
})
export class MaximoHistoricoComponent implements OnInit {
  listTickers = [];
  form: FormGroup;
  companyFound = [];
  searchList = [];
  isSearchingCompany = false;
  dataInput: any;
  isLoading = false;
  constructor(
    private data: MaximHistoricoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getTickersAndCompanies();
  }
  getData() {
    this.isLoading = true;
    this.data.getData(this.form.controls.ticker.value).subscribe(res => {
      // console.log(res);
      this.dataInput = res; 
      this.isLoading = false;
    });
    
  }
  getTickersAndCompanies() {
    this.data.getTickers().subscribe(res => {
      // console.log(res);
      this.listTickers = res;
    });
  }
  createForm() {
    this.form = this.formBuilder.group (
      {
        ticker: '',
        search: ''
      });
    // this.reactiveForm.controls.phones;
  }
  selectCompany() {
    this.companyFound = this.listTickers.filter(res => {
      if (res.Symbol.includes(this.form.controls.ticker.value)) {
        return res;
      }
    });
  }
  searchCompany() {
    this.isSearchingCompany = true;
    this.searchList = [];
    this.searchList = this.listTickers.filter(res => {
      if (res.Symbol.toUpperCase().includes(this.form.controls.search.value.toUpperCase())) {
        return res;
      } else if (res['Company Name'].toUpperCase().includes(this.form.controls.search.value.toUpperCase())) {
        return res;
      }
    });
    // console.log(this.searchList);
    this.isSearchingCompany = false;
  }
  addTicker(ticker: string) {
    this.form.controls.ticker.setValue(ticker);
  }
}
