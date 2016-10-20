/* tslint:disable:no-unused-variable */
import { BeerListComponent } from './beerlist.component';
import { BeerImplementation, Beer } from "./../../businessObjects/beer";
import { BeersService } from "../../services/beersService";
import { Http } from "@angular/http"; 


import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

describe('Beerlist Component with TCB', function () {

    let setOfBeers: Beer[];

    beforeEach((done) => {
        TestBed.configureTestingModule({imports: [], declarations: [BeerListComponent], providers: [BeersService]});
        setOfBeers = [];

        for(let i = 0; i < 10; i++){

            let beer1 = new BeerImplementation();
            beer1.id = "BeerId" + i;
            beer1.name = "My Beer " + i;

            setOfBeers.push(beer1);
        }

        TestBed.compileComponents().then(() => done());
    });

    it('should display 10 beers', () => {
        let fixture = TestBed.createComponent(BeerListComponent);
        fixture.componentInstance.items = setOfBeers; 
        fixture.detectChanges();

        let elements = fixture.debugElement.queryAll(By.css('div'));

        expect(elements.length).toEqual(10);
    });
});
