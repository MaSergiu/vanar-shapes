"use strict";
var router_1 = require('@angular/router');
//importiruem nashi componenti//obi
var circle_component_1 = require('./circle.component');
var square_component_1 = require('./square.component');
var triangle_component_1 = require('./triangle.component');
//avliem vse puti dlia modulia
var appRoutes = [
    { path: 'circle', component: circle_component_1.CircleComponent },
    { path: 'square', component: square_component_1.SquareComponent },
    { path: 'triangle', component: triangle_component_1.TriangleComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map