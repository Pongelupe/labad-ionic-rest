import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { take } from "rxjs/operators";
import { CustomerDTO } from '../../models/customer.dto';
import { CustomerService } from '../../services/customer.service';
import { CustomerDetailsPage } from '../customer-details/customer-details';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  customers: CustomerDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private customerService: CustomerService) {
  }

  ionViewDidLoad(): void {
    this.customerService.findAll()
      .pipe(take(1))
      .subscribe(customers => this.customers = customers);

  }

  itemTapped(event, customer) {
    this.navCtrl.push(CustomerDetailsPage, {
      customer
    });
  }
}
