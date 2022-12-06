import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'navigation', canActivate: [AuthGuard], component: NavigationComponent, children: [
      { path: 'user-table', loadChildren: () => import('./Users/user-table/modules/user-table.module').then(m => m.UserTableModule) },
      { path: 'user-dialog', loadChildren: () => import('./Users/user-dialog/modules/user-dialog.module').then(m => m.UserDialogModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
