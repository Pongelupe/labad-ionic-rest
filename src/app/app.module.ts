import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {CustomerService} from "../services/customer.service";
import { OrderPage } from '../pages/order/order';
import { CustomerPage } from '../pages/customer/customer';
import { OrderService } from '../services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsPage } from '../pages/customer-details/customer-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OrderPage,
    CustomerPage,
    CustomerDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OrderPage,
    CustomerPage,
    CustomerDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerService,
    OrderService,
    CustomerDetailsPage
  ]
})
export class AppModule {}
