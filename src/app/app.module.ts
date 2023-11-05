import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './shared/error/error.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SideNavBarComponent } from './shared/layout/side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './shared/layout/top-nav-bar/top-nav-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { RecentOrderComponent } from './components/recent-order/recent-order.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    LayoutComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    CardsComponent,
    RecentOrderComponent,
    NewUserComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
