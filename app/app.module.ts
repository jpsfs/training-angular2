import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppRoutes } from "./app.routes";
import { AppComponent }  from './app.component';
import { BeerListComponent } from "./components/beerlist/beerlist.component";
import { BeerDetailsComponent } from "./components/beerDetails/beerDetails.component";

import {BeersService} from "./services/beersService";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [BeersService],
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
