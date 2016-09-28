import {Component} from '@angular/core';

@Component({
    //selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>Square</h1>
            
            <p><a (click) ="onCreate()" class="btn btn-primary btn-lg" href="#" role="button">Create</a></p>
            <div class='shape'></div>
        </div>
    `
})
export class SquareComponent {
    onCreate() {
        alert('OK');
        //jQuery('body').remove();
    }
}
