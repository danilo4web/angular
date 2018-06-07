import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'restaurant/:id', component: RestauratComponent},
    {path: 'about', component: AboutComponent},
]