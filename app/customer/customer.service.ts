import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable()
export class CustomerService {
    constructor(private _http : Http) { }

    private customerURL = 'api/customers';
    private customerFile = 'app/customers/customers.json'

    getCustomers() {
        return this._http.get(this.customerFile)
        .map((response: Response) => response.json())
        .toPromise()
        // .then((response: Response) => response.json() as {id: number, name: string }[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}