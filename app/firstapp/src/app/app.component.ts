import { Component } from '@angular/core';

@Component({
    selector: 'app-comp',
    template: `<div>
                    <h1>This is main component </h1>
                    <app-prod></app-prod>
                    <app-dash></app-dash>
              </div>`
})

export class AppComponent {

}
