import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingOutbreakPageRoutingModule } from './ongoing-outbreak-routing.module';

import { OngoingOutbreakPage } from './ongoing-outbreak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingOutbreakPageRoutingModule
  ],
  declarations: [OngoingOutbreakPage]
})
export class OngoingOutbreakPageModule {}
