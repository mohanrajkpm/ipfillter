import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AddipComponent } from './components/addip/addip.component';
import { RoutingModule} from '../app/route/routing/routing.module';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'addIp/:subs', component: AddipComponent },
  { path: '', redirectTo: '/subscription', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    AddipComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ RoutingModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
