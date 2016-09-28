import {Component} from '@angular/core';

@Component({
    selector: '#nav',
    template: `
    <li routerLinkActive ="active"><a routerLink="/circle">Circle <span class="sr-only">(current)</span></a></li>
    <li routerLinkActive = "active"><a routerLink="/square">Square</a></li>
    <li routerLinkActive = "active"><a routerLink="/triangle">Triangle</a></li>
    `
})
export class NavComponent {
}
