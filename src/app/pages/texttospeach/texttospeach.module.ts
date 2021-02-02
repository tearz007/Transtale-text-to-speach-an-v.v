import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TexttospeachPageRoutingModule } from './texttospeach-routing.module';

import { TexttospeachPage } from './texttospeach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexttospeachPageRoutingModule
  ],
  declarations: [TexttospeachPage]
})
export class TexttospeachPageModule {}
