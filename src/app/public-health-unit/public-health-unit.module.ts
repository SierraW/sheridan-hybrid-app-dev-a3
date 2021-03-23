import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicHealthUnitPageRoutingModule } from './public-health-unit-routing.module';

import { PublicHealthUnitPage } from './public-health-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicHealthUnitPageRoutingModule
  ],
  declarations: [PublicHealthUnitPage]
})
export class PublicHealthUnitPageModule {}
