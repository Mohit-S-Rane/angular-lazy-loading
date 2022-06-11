import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserGuard} from './modules/core/guards/user-guard';
import {AdminGuard} from './modules/core/guards/admin-guard';
import {LoginComponent} from './containers/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent}
  , {
    path: 'user',
    canActivateChild: [UserGuard],
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin', canActivateChild: [AdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
