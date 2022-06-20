import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './features/home/home.component';
import { LandingComponent } from './features/home/landing/landing.component';
import { PrimitiveControlsComponent } from './primitive-controls/primitive-controls.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'ui-components',
    loadChildren: () => import('./ui-components/ui-components.module').then(m => m.UiComponentsModule)
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'primitive',
    component: PrimitiveControlsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }