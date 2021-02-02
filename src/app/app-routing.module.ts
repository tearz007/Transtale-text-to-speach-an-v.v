import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'texttospeach',
    pathMatch: 'full'
  },
  {
    path: 'texttospeach',
    loadChildren: () => import('./pages/texttospeach/texttospeach.module').then( m => m.TexttospeachPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
