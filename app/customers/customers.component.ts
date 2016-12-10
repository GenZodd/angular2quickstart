import { Component, OnInit } from '@angular/core';
import { CustomerService, CustomerComponent } from '../customer/index';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    // customers: {id: number, name: string }[];
    customers: any[];
    // customers: Promise<any[]>;

    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        //  this.customers = this._customerService.getCustomers();
         this._customerService.getCustomers().then(customers => this.customers = customers);
    }
}