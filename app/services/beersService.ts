import {Injectable} from "@angular/core";
import {Observable} from "rxjs/observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import * as ngHttp from "@angular/http";

import * as Config from "../config";
import {Beer, BeerFactory} from "../businessObjects/beer";

@Injectable()
export class BeersService{
    
    constructor(private http: ngHttp.Http){

    }

    public getBeers(): Promise<Beer[]>{

        let requestParameters: ngHttp.URLSearchParams = new ngHttp.URLSearchParams();
        requestParameters.set("glasswareId", "1");

        return this.http.get(
            Config.buildBreweryDBEndpoint("/beers"),
            {
                search: requestParameters
            })
        .toPromise()
        .then((response: ngHttp.Response) => {
            let listOfBeers = response.json();

            return listOfBeers.data.map((beer: any) => {
                return BeerFactory.create(beer);
            });

        }).catch((error) =>{
            console.error(error);
        });
    }
}