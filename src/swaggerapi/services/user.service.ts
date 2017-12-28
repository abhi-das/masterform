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

import { User } from '../models/user';


@Injectable()
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This can only be done by the logged in user.
   * @param body - Created user object
   */
  createUserResponse(body: User): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/user`,
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
   * This can only be done by the logged in user.
   * @param body - Created user object
   */
  createUser(body: User): Observable<void> {
    return this.createUserResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param body - List of user object
   */
  createUsersWithArrayInputResponse(body: User[]): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/user/createWithArray`,
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
   * @param body - List of user object
   */
  createUsersWithArrayInput(body: User[]): Observable<void> {
    return this.createUsersWithArrayInputResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param body - List of user object
   */
  createUsersWithListInputResponse(body: User[]): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/user/createWithList`,
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
   * @param body - List of user object
   */
  createUsersWithListInput(body: User[]): Observable<void> {
    return this.createUsersWithListInputResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param username - The user name for login
   * @param password - The password for login in clear text
   */
  loginUserResponse(params: UserService.LoginUserParams): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set("username", params.username.toString());
    if (params.password != null) __params = __params.set("password", params.password.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/user/login`,
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
        let _body: string = null;
        _body = _resp.body as string
        return _resp.clone({body: _body}) as HttpResponse<string>;
      })
    );
  }

  /**
   * @param username - The user name for login
   * @param password - The password for login in clear text
   */
  loginUser(params: UserService.LoginUserParams): Observable<string> {
    return this.loginUserResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  logoutUserResponse(): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/user/logout`,
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
   */
  logoutUser(): Observable<void> {
    return this.logoutUserResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param username - The name that needs to be fetched. Use user1 for testing. 
   */
  getUserByNameResponse(username: string): Observable<HttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/user/${username}`,
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
        let _body: User = null;
        _body = _resp.body as User
        return _resp.clone({body: _body}) as HttpResponse<User>;
      })
    );
  }

  /**
   * @param username - The name that needs to be fetched. Use user1 for testing. 
   */
  getUserByName(username: string): Observable<User> {
    return this.getUserByNameResponse(username).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * This can only be done by the logged in user.
   * @param username - name that need to be updated
   * @param body - Updated user object
   */
  updateUserResponse(params: UserService.UpdateUserParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.body;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/user/${params.username}`,
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
   * This can only be done by the logged in user.
   * @param username - name that need to be updated
   * @param body - Updated user object
   */
  updateUser(params: UserService.UpdateUserParams): Observable<void> {
    return this.updateUserResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * This can only be done by the logged in user.
   * @param username - The name that needs to be deleted
   */
  deleteUserResponse(username: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/user/${username}`,
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
   * This can only be done by the logged in user.
   * @param username - The name that needs to be deleted
   */
  deleteUser(username: string): Observable<void> {
    return this.deleteUserResponse(username).pipe(
      map(_r => _r.body)
    );
  }}

export module UserService {
  export interface LoginUserParams {
    username: string;
    password: string;
  }
  export interface UpdateUserParams {
    username: string;
    body: User;
  }
}
