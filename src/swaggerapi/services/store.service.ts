/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { Order } from '../models/order';


@Injectable()
export class StoreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a map of status codes to quantities
   */
  getInventoryResponse(): Observable<HttpResponse<{[key: string]: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/store/inventory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: {[key: string]: number} = null;
        
        return _resp.clone({body: _body}) as HttpResponse<{[key: string]: number}>;
      })
    );
  }

  /**
   * Returns a map of status codes to quantities
   */
  getInventory(): Observable<{[key: string]: number}> {
    return this.getInventoryResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param body - order placed for purchasing the pet
   */
  placeOrderResponse(body: Order): Observable<HttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/store/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Order = null;
        _body = _resp.body as Order
        return _resp.clone({body: _body}) as HttpResponse<Order>;
      })
    );
  }

  /**
   * @param body - order placed for purchasing the pet
   */
  placeOrder(body: Order): Observable<Order> {
    return this.placeOrderResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
   * @param orderId - ID of pet that needs to be fetched
   */
  getOrderByIdResponse(orderId: number): Observable<HttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/store/order/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Order = null;
        _body = _resp.body as Order
        return _resp.clone({body: _body}) as HttpResponse<Order>;
      })
    );
  }

  /**
   * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
   * @param orderId - ID of pet that needs to be fetched
   */
  getOrderById(orderId: number): Observable<Order> {
    return this.getOrderByIdResponse(orderId).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
   * @param orderId - ID of the order that needs to be deleted
   */
  deleteOrderResponse(orderId: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/store/order/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
   * @param orderId - ID of the order that needs to be deleted
   */
  deleteOrder(orderId: number): Observable<void> {
    return this.deleteOrderResponse(orderId).pipe(
      map(_r => _r.body)
    );
  }}

export module StoreService {
}
