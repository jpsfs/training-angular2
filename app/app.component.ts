import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
    `
})
export class AppComponent {

    constructor(){
        console.log("App Component was constructed!");
    }
}
