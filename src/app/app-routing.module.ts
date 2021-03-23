import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'school-covid19-data',
    pathMatch: 'full'
  },
  {
    path: 'ongoing-outbreak',
    loadChildren: () => import('./ongoing-outbreak/ongoing-outbreak.module').then( m => m.OngoingOutbreakPageModule)
  },
  {
    path: 'public-health-unit',
    loadChildren: () => import('./public-health-unit/public-health-unit.module').then( m => m.PublicHealthUnitPageModule)
  },
  {
    path: 'school-covid19-data',
    loadChildren: () => import('./school-covid19-data/school-covid19-data.module').then( m => m.SchoolCovid19DataPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
