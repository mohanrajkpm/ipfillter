import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from '../../components/subscription/subscription.component';
import { AddipComponent} from '../../components/addip/addip.component';
import { from } from 'rxjs';
const appRoutes: Routes = [
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'addIp/:subs', component: AddipComponent },
  { path: '', redirectTo: '/subscription', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
