// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { AirplaneComponent } from './airplane/airplane.component';
import { SliderComponent } from './slider/slider.component';
import { PackagesComponent } from './packages/packages.component';
import { WorksComponent } from './works/works.component';
import { TipsComponent } from './tips/tips.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    AirplaneComponent,
    SliderComponent,
    PackagesComponent,
    WorksComponent,
    TipsComponent,
    PromotionsComponent
  ]
})
export class ThemeModule { }
