import {Component} from '@angular/core';
declare var jQuery: any;

@Component({
    selector: '#search-form',
    template: `
        <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default" (click)="onSubmit()">Submit</button>
        </form>
  `
})

export class SearchComponent {

    words = ['Circle', 'Triangle', 'Square'];

    onSubmit() {
        var keyword = jQuery('#search-form input').val();
        for (var i in this.words) {
            if (this.words[i].search(keyword) != -1) {
                alert(this.words[i]);
            }
        }

        return false;
    }
}
