import { Component } from '@angular/core';

@Component({
  selector: '.search',
  template: `
  <form class="navbar-form navbar-left">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
  `
})

export class Search {}
