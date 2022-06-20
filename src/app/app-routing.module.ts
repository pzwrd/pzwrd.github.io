import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LandingComponent } from './features/home/landing/landing.component';

const routes: Routes = [
  {
    path: 'ui-components',
    loadChildren: () => import('./ui-components/ui-components.module').then(m => m.UiComponentsModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }