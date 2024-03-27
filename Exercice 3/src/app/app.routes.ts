import { Routes } from '@angular/router';
import { ModelListComponent } from './model-list/model-list.component';
import { TrimListComponent } from './trim-list/trim-list.component';
import { TrimDetailComponent } from './trim-detail/trim-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/models', pathMatch: 'full' },
    { path: 'models', component: ModelListComponent },
    { path: 'models/:modelId/trims', component: TrimListComponent },
    { path: 'models/:modelId/trims/:trimId', component: TrimDetailComponent }
];
