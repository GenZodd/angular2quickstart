import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
    {id: 1, name: 'ward'},
    {id: 2, name: 'jim'},
    {id: 3, name: 'bill'},
    {id: 4, name: 'suzie'},
    {id: 5, name: 'jack'}
  ];
    }
}