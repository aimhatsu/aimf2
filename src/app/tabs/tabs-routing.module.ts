import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ],
        //canActivate: [AuthGuard]
      },
      {
        path: 'pacientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pacientes/pacientes.module').then(m => m.PacientesPageModule)
          }
        ],
        //canActivate: [AuthGuard]
      },
      {
        path: 'data',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../data/data.module').then(m => m.DataPageModule)
          }
        ],
        //canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
