import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolCovid19DataPageRoutingModule } from './school-covid19-data-routing.module';

import { SchoolCovid19DataPage } from './school-covid19-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolCovid19DataPageRoutingModule
  ],
  declarations: [SchoolCovid19DataPage]
})
export class SchoolCovid19DataPageModule {}
