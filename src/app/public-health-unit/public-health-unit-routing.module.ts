import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicHealthUnitPage } from './public-health-unit.page';

const routes: Routes = [
  {
    path: '',
    component: PublicHealthUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicHealthUnitPageRoutingModule {}
