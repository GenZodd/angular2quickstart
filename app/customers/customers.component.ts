import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    // customers: {id: number, name: string }[];
    customers: any;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        //  this._customerService.getCustomers().then(customers => this.customers = customers);
         this.customers = this._customerService.getCustomers();
    }
}