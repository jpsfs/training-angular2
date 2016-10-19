import * as ngCore from "@angular/core";

import {Beer} from "../../businessObjects/beer";

@ngCore.Component({
    selector: "beerlist",
    inputs: ["items"]
    
})
export class BeerListComponent{

    public items: Beer[];
}