import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./app/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./app/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./shared/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./shared/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
