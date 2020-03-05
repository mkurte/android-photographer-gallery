import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AngularDemoComponent } from './core/components/angular-demo/angular-demo.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'angular-demo',
        component: AngularDemoComponent
      },
      {
        path: '404',
        component: PageNotFoundComponent
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
