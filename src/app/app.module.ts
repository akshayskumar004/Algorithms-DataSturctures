import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortingAlgorithmsComponent } from './sorting-algorithms/sorting-algorithms.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingAlgorithmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
