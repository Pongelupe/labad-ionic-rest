import { Component } from '@angular/core';
import { CustomerDTO } from "../../models/customer.dto";
import { CustomerService } from "../../services/customer.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  searchQuery: string = '';
  items: CustomerDTO[];

  constructor(public customerService: CustomerService) {
    this.initializeItems();
  }

  initializeItems() {
    this.customerService.findAll()
      .subscribe(response => {
        this.items = response;
      },
        error => {
          // TODO tratar erros
          console.log(error);
        });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /*itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CustomerPage, {
      item: item
    });
  }*/
}
