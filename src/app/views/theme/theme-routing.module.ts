import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ColorsComponent } from './colors.component';
// import { TypographyComponent } from './typography.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { PackagesComponent } from './packages/packages.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { SliderComponent } from './slider/slider.component';
import { TipsComponent } from './tips/tips.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'APP MANAGEMENT'
    },
    children: [
      // {
      //   path: 'colors',
      //   component: ColorsComponent,
      //   data: {
      //     title: 'Colors'
      //   }
      // },
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
      //     title: 'Typography'
      //   }
      // },
      {
        path: 'airplane',
        component: AirplaneComponent,
        data: {
          title: 'Airplane'
        }
      },

      {
        path: 'promotions',
        component: PromotionsComponent,
        data: {
          title: 'Promotions'
        }
      },
      {
        path: 'slider',
        component: SliderComponent,
        data: {
          title: 'Slider'
        }
      },
      {
        path: 'package',
        component:PackagesComponent,
        data: {
          title: 'Package'
        }
      },
      {
        path: 'tips',
        component: TipsComponent,
        data: {
          title: 'Tips'
        }
      },
      {
        path: 'works',
        component: WorksComponent,
        data: {
          title: 'Works'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
