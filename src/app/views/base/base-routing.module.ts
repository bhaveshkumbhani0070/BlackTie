import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';
import { FlightComponent } from './flight/flight.component';
import { PackageComponent } from './package/package.component';
import { ManageComponent } from './manage/manage.component';
import { NotificationComponent } from './notification/notification.component';
import { AccountComponent } from './account/account.component';
import { AccountRequestComponent } from './account-request/account-request.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { NewEnquiriesComponent } from './new-enquiries/new-enquiries.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'flight',
        component: FlightComponent,
        data: {
          title: 'Flight'
        }
      },
      {
        path:'package',
        component:PackageComponent,
        data:{
          title:'Package'
        }
      },
      {
        path:'manage',
        component:ManageComponent,
        data:{
          title:'Manage'
        }
      },
      {
        path:'notification',
        component:NotificationComponent,
        data:{
          title:'Notification'
        }
      },
      {
        path:'account',
        component:AccountComponent,
        data:{
          title:'Account'
        }
      },
      {
        path:'accountRequest',
        component:AccountRequestComponent,
        data:{
          title:'AccountRequest'
        }
      },
      {
        path:'manageRequest',
        component:ManageRequestComponent,
        data:{
          title:'ManageRequest'
        }
      },
      {
        path:'newEnquiries',
        component:NewEnquiriesComponent,
        data:{
          title:'NewEnquiries'
        }
        
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
