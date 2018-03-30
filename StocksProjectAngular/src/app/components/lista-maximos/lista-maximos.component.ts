import { Component, OnInit } from '@angular/core';
import { MaximHistoricoService } from '../../services/maxim-historico.service';

@Component({
  selector: 'app-lista-maximos',
  templateUrl: './lista-maximos.component.html',
  styleUrls: ['./lista-maximos.component.css']
})
export class ListaMaximosComponent implements OnInit {
  lista = [];
  errores = [];
  deprecated = [];
  loadedCompanies = 0;
  now = '2018-03-23';
  increment = 2;
  companyLimit: number;
  constructor(
    private data: MaximHistoricoService
  ) { }

  ngOnInit() {
    this.loadList();
  }
  loadList() {
    this.data.getTickers().subscribe(res => {
      // console.log(res);
      this.companyLimit = res.length;
      for (let i = 0; i < res.length; i++) {
        if (i > this.loadedCompanies) {
          if (i < (this.loadedCompanies + this.increment)) {
            this.data.getData(res[i].Symbol).subscribe(pres => {
              console.log(pres);
              let actualize = false
              for (const item in pres['Time Series (Daily)']) {
                if (item) {
                  if (item == this.now) {
                    actualize = true;
                  }
                }
              }
              if (actualize) {
                if (pres['Meta Data']) {
                  const cosa = this.getMaximusHistoric(pres);
                  this.lista.push({ percent: cosa, ticker: res[i].Symbol });
                }
              } else if (!actualize && pres['Meta Data']) {
                this.deprecated.push(res[i].Symbol);
              }
              else {
                this.errores.push(res[i].Symbol);
              }
            });
          } else {
            break;
          }
        }
      }
    });

  }
  addCompanies() {
    let i = setInterval(() => {
      this.loadedCompanies = this.loadedCompanies + this.increment;
      this.loadList();
      if (this.loadedCompanies > this.companyLimit) {
        alert('fin');
        clearInterval(i);
      }
    }, 11000);
  }
  getMaximusHistoric(data: any) {
    //console.log('data', data);
    let minimum: number;
    let maximum: number;
    let actual: number;
    let diference: number;
    for (const item in data['Time Series (Daily)']) {
      if (item) {
        if (!minimum) {
          minimum = parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']) < minimum) {
          minimum = parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (!maximum) {
          maximum = parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']) > maximum) {
          maximum = parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']);
        }
        if (!actual) {
          actual = parseFloat(data['Time Series (Daily)'][item]['5. adjusted close']);
        }
      }
    }
    diference = ((maximum - actual) / maximum) * 100;
    //console.log({max: maximum, min: minimum, act: actual});
    return diference;
  }
  sort() {
    this.lista.sort(function (a, b) { return a.percent - b.percent });
    this.data.listaDeMaximos = this.lista;
  }
}
