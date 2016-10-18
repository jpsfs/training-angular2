import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
        <button (click)="onClick($event)">Click Me!</button>
    `
})
export class AppComponent {

    constructor(){
        console.log("App Component was constructed!");
    }

    public onClick(event: Event): void{
        console.log("Button Clicked!");
    }
}
