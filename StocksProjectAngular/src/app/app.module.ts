import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { KeyService } from './services/key.service';
import { TestService } from './services/test.service';
import { MaximHistoricoService } from './services/maxim-historico.service';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaximoHistoricoComponent } from './components/maximo-historico/maximo-historico.component';
import { SingleChartComponent } from './components/single-chart/single-chart.component';
import { ListaMaximosComponent } from './lista-maximos/lista-maximos.component';



const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'maximos', component: MaximoHistoricoComponent },
  { path: 'lista', component: ListaMaximosComponent },
  { path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    MaximoHistoricoComponent,
    SingleChartComponent,
    ListaMaximosComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ReactiveFormsModule
  ],
  providers: [KeyService, TestService, MaximHistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
