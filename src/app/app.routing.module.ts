import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from '../pages/home/home';
import { AboutPageComponent} from '../pages/about/about';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);