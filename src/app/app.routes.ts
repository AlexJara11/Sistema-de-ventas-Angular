import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () =>
      import('./Components/layout/layout.module').then(m => m.LayoutModule),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
