import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
    selector: '.language',
    template: `
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#" (click)="onChange()" >Ro<span class="sr-only">(current)</span></a></li>
            <li><a href="#" (click)="onChange()" >En</a></li>
            <li><a href="#" (click)="onChange()" >Ru</a></li>
        </ul>
    `
})
export class LanguageComponent {
    languageCodes = ['Romanian', 'English', 'Russian'];

    onChange() {

    }
}