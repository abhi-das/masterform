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

import { Pet } from '../models/pet';
import { ApiResponse } from '../models/api-response';


@Injectable()
export class PetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body - Pet object that needs to be added to the store
   */
  addPetResponse(body: Pet): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/pet`,
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
   * @param body - Pet object that needs to be added to the store
   */
  addPet(body: Pet): Observable<void> {
    return this.addPetResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param body - Pet object that needs to be added to the store
   */
  updatePetResponse(body: Pet): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/pet`,
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
   * @param body - Pet object that needs to be added to the store
   */
  updatePet(body: Pet): Observable<void> {
    return this.updatePetResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Multiple status values can be provided with comma separated strings
   * @param status - Status values that need to be considered for filter
   */
  findPetsByStatusResponse(status: string[]): Observable<HttpResponse<Pet[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (status || []).forEach((val, index) => {if (val != null) __params = __params.append("status", val.toString())});
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/pet/findByStatus`,
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
        let _body: Pet[] = null;
        _body = _resp.body as Pet[]
        return _resp.clone({body: _body}) as HttpResponse<Pet[]>;
      })
    );
  }

  /**
   * Multiple status values can be provided with comma separated strings
   * @param status - Status values that need to be considered for filter
   */
  findPetsByStatus(status: string[]): Observable<Pet[]> {
    return this.findPetsByStatusResponse(status).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
   * @param tags - Tags to filter by
   */
  findPetsByTagsResponse(tags: string[]): Observable<HttpResponse<Pet[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (tags || []).forEach((val, index) => {if (val != null) __params = __params.append("tags", val.toString())});
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/pet/findByTags`,
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
        let _body: Pet[] = null;
        _body = _resp.body as Pet[]
        return _resp.clone({body: _body}) as HttpResponse<Pet[]>;
      })
    );
  }

  /**
   * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
   * @param tags - Tags to filter by
   */
  findPetsByTags(tags: string[]): Observable<Pet[]> {
    return this.findPetsByTagsResponse(tags).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Returns a single pet
   * @param petId - ID of pet to return
   */
  getPetByIdResponse(petId: number): Observable<HttpResponse<Pet>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/pet/${petId}`,
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
        let _body: Pet = null;
        _body = _resp.body as Pet
        return _resp.clone({body: _body}) as HttpResponse<Pet>;
      })
    );
  }

  /**
   * Returns a single pet
   * @param petId - ID of pet to return
   */
  getPetById(petId: number): Observable<Pet> {
    return this.getPetByIdResponse(petId).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param petId - ID of pet that needs to be updated
   * @param status - Updated status of the pet
   * @param name - Updated name of the pet
   */
  updatePetWithFormResponse(params: PetService.UpdatePetWithFormParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/pet/${params.petId}`,
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
   * @param petId - ID of pet that needs to be updated
   * @param status - Updated status of the pet
   * @param name - Updated name of the pet
   */
  updatePetWithForm(params: PetService.UpdatePetWithFormParams): Observable<void> {
    return this.updatePetWithFormResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param petId - Pet id to delete
   * @param api_key - undefined
   */
  deletePetResponse(params: PetService.DeletePetParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    if (params.apiKey != null) __headers = __headers.set("api_key", params.apiKey.toString());
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/pet/${params.petId}`,
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
   * @param petId - Pet id to delete
   * @param api_key - undefined
   */
  deletePet(params: PetService.DeletePetParams): Observable<void> {
    return this.deletePetResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param petId - ID of pet to update
   * @param file - file to upload
   * @param additionalMetadata - Additional data to pass to server
   */
  uploadFileResponse(params: PetService.UploadFileParams): Observable<HttpResponse<ApiResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/pet/${params.petId}/uploadImage`,
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
        let _body: ApiResponse = null;
        _body = _resp.body as ApiResponse
        return _resp.clone({body: _body}) as HttpResponse<ApiResponse>;
      })
    );
  }

  /**
   * @param petId - ID of pet to update
   * @param file - file to upload
   * @param additionalMetadata - Additional data to pass to server
   */
  uploadFile(params: PetService.UploadFileParams): Observable<ApiResponse> {
    return this.uploadFileResponse(params).pipe(
      map(_r => _r.body)
    );
  }}

export module PetService {
  export interface UpdatePetWithFormParams {
    petId: number;
    status?: string;
    name?: string;
  }
  export interface DeletePetParams {
    petId: number;
    apiKey?: string;
  }
  export interface UploadFileParams {
    petId: number;
    file?: any;
    additionalMetadata?: string;
  }
}
