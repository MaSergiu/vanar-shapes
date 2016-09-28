import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
    //selector: 'my-app',
    template: `
    <div class="jumbotron">
        <h1>Circle</h1>
        <p><a (click) ="onCreate()" class="btn btn-primary btn-lg" href="#" role="button">Create</a></p>

        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Diameter in px" value="100px">
            </div>
        </form>

        <div class='shape'></div>
    </div>
    `
})
export class CircleComponent {
    diameter = 100;
    //sozdati lichnie svoistva
    shape_code = `
    <div style="background:red;width:100px;height:100px;border-radius:100%"></div>
    `
//function reacte on click on CREATE
    onCreate() {
        //alert('OK');
        //document.getElementsByClassName('shape')[0].innerHTML = this.shape_code;
        jQuery('.shape').html(this.shape_code);
        return false;

    }
}
