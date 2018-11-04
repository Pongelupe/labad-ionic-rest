import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_CONFIG} from "../config/api.config";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {CustomerDTO} from "../models/customer.dto";

@Injectable()
export class CustomerService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(): Observable<any> {
        return this.http.get<CustomerDTO[]>(`${API_CONFIG.baseUrl}/customers`);
    }

}