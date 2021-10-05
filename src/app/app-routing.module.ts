import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaPageModule) },
  { path: 'atendimento', loadChildren: () => import('./atendimento/atendimento.module').then(m => m.AtendimentoPageModule) },
  { path: 'prontuario', loadChildren: () => import('./prontuario/prontuario.module').then(m => m.ProntuarioPageModule) },
  { path: 'form-modal', loadChildren: () => import('./form-modal/form-modal.module').then(m => m.FormModalPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
