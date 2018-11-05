import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomerDTO } from '../../models/customer.dto';

@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {

  customer: CustomerDTO;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.navParams.get('customer');
  }

  ionViewDidLoad() {
  }

}
