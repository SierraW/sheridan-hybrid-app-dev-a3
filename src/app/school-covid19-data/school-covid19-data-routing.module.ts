import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolCovid19DataPage } from './school-covid19-data.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolCovid19DataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolCovid19DataPageRoutingModule {}
