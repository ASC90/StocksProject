import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { KeyService } from './services/key.service';
import { TestService } from './services/test.service';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent
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
    )
  ],
  providers: [KeyService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
