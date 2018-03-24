import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {HttpClientModule} from '@angular/common/http';

import { KeyService } from './services/key.service';
import { TestService } from './services/test.service';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [KeyService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
