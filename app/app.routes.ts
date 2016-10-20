import {BeerListComponent} from "./components/beerlist/beerlist.component";
import {BeerDetailsComponent} from "./components/beerDetails/beerDetails.component";

export const AppRoutes = [
  { path: '', component: BeerListComponent },
  { path: 'beers/:id', component: BeerDetailsComponent }
];