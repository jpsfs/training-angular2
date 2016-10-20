import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My Beer Manager</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

    constructor(){
        console.log("App Component was constructed!");
    }
}
