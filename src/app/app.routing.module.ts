import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from '../pages/home/home';
import { GalleryPageComponent} from '../pages/gallery/gallery';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'gallery',
        component: GalleryPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);