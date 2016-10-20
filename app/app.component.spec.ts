/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes"
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from "@angular/router"
import { BeerListComponent } from "./components/beerlist/beerlist.component";
import { BeerDetailsComponent } from "./components/beerDetails/beerDetails.component";
import { BeersService } from "./services/beersService";


import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(AppRoutes)],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, BeersService],
      declarations: [AppComponent, BeerListComponent, BeerDetailsComponent]
    });

    TestBed.compileComponents().then(() => {
      done();
    })
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h1> text', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h1.innerText).toMatch(/beer/i, '<h1> should say something about "Angular App"');
  });
});
