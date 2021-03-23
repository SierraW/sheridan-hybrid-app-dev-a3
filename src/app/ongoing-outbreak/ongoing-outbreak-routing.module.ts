import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingOutbreakPage } from './ongoing-outbreak.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingOutbreakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingOutbreakPageRoutingModule {}
