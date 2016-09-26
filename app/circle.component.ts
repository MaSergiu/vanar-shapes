import { Component } from '@angular/core';

@Component({
    //selector: 'my-app',
    template:
    `
    <div class="jumbotron">
      <h1>Circle</h1>

      <p><a (click) ="onCreate()" class="btn btn-primary btn-lg" href="#" role="button">Create</a></p>
<div class='shape'></div>
    </div>
    `
})
export class CircleComponent {
    //sozdati lichnie svoistva
    shape_code=`
    <div style="background:red;width:100px;height:100px;border-radius:100%"></div>
    `
//function reacte on click on CREATE
onCreate(){
//alert('OK');
document.getElementsByClassName('shape')[0].innerHTML = this.shape_code;
return false;

}
}
