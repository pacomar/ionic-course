import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppUrls } from '@appConfig/app-urls.config';

const routes: Routes = [
  { path: AppUrls.App, redirectTo: AppUrls.AppHome, pathMatch: 'full' },
  { path: AppUrls.AppHome, loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
