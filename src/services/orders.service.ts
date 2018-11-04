import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_CONFIG} from "../config/api.config";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {OrderDTO} from "../models/order.dto";

@Injectable()
export class OrderService {

    public headers: HttpHeaders;

    constructor(public http: HttpClient) {
    }

    findAll(customer_id) {
        return this.http.get<OrderDTO[]>(`${API_CONFIG.baseUrl}/orders?customer_id=${customer_id}`, {});
    }

}