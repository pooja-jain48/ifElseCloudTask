import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },

      {
        path: 'dashboard', component: DashboardComponent,
      },
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', component: DashboardComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
