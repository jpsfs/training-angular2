import * as ngCore from "@angular/core";

import {Beer} from "../../businessObjects/beer";
import {BeersService} from "../../services/beersService";

@ngCore.Component({
    moduleId: module.id,
    selector: "beerlist",
    inputs: ["items"],
    templateUrl: "beerlist.component.html"
})
export class BeerListComponent implements ngCore.OnInit, ngCore.OnDestroy, ngCore.AfterContentInit, ngCore.AfterViewInit, ngCore.AfterContentChecked, ngCore.AfterViewChecked{

    public items: Beer[];

    constructor(private beerService: BeersService){
        console.log("Ready!");
    }

    public ngOnInit():void {
        // Check if items is filled
        if(!this.items){
            this.beerService.getBeers().then((result) => {
                this.items = result;
            });
        }
    }

    public ngOnDestroy(): void{
        console.log("BeerListComponent Destroyed!");
    }

    public ngAfterViewInit(): void{
        console.log("BeerListComponent After View Init!");
    }
    public ngAfterContentInit(): void{
        console.log("BeerListComponent After Content Init!");
    }
    public ngAfterContentChecked(): void{
        console.log("BeerListComponent After Content Checked!");
    }

    public ngAfterViewChecked(): void{
        console.log("BeerListComponent After View Checked!");
    }

}