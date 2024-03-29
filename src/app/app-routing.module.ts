import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth', //TODO localhost:4200/
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', //TODO localhost:4200/
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
