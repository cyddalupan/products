import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';
import { API_PATH } from './settings';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  getParents(): Observable<Product[]> {
    const url = `${ API_PATH }/parents`;
    return this.http.get<Product[]>(url);
  }

  getChildren(parent_id: number): Observable<Product[]> {
    const url = `${ API_PATH }/children/${ parent_id }`;
    return this.http.get<Product[]>(url);
  }

  getChildrenSubchildren(parent_id: number): Observable<Product[]> {
    const url = `${ API_PATH }/children_subchildren/${ parent_id }`;
    return this.http.get<Product[]>(url);
  }
}
