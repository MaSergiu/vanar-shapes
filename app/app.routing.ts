import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importiruem nashi componenti//obi
import {CircleComponent} from './circle.component';
import {SquareComponent} from './square.component';
import {TriangleComponent} from './triangle.component';

//avliem vse puti dlia modulia
const appRoutes: Routes = [
    {path: 'circle', component: CircleComponent},
    {path: 'square', component: SquareComponent},
    {path: 'triangle', component: TriangleComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
