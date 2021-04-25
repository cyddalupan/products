import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';  // from //third_party/javascript/ngrx:ngrx_effects
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ProductActions from './actions';
import { ProductService } from '../product.service';
import { Product } from '../product';

/** The effects for the products. */
@Injectable()
export class ProductEffects {
  getParents$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product] Load Get Parents'),
      switchMap(() => {
        return this.productService.getParents().pipe(
            map((res: Product[]) => {
              const data = res;
              if (data) {
                return ProductActions.SaveProduct({ data });
              }
              return ProductActions.loadFailed();
            }),
            catchError(error => {
              return observableOf(ProductActions.loadFailed());
            }),
          );
      }
      )
    )
  );

  getChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product] Load Get Children'),
      switchMap((action: {readonly id: number}) => {
        return this.productService.getChildren(action.id).pipe(
            map((res: Product[]) => {
              const data = res;
              if (data) {
                return ProductActions.SaveProduct({ data });
              }
              return ProductActions.loadFailed();
            }),
            catchError(error => {
              return observableOf(ProductActions.loadFailed());
            }),
          );
      }
      )
    )
  );

  getChildrenSubchildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Product] Load Get Children and Sub Children'),
      switchMap((action: {readonly id: number}) => {
        return this.productService.getChildrenSubchildren(action.id).pipe(
            map((res: Product[]) => {
              const data = res;
              if (data) {
                return ProductActions.SaveProduct({ data });
              }
              return ProductActions.loadFailed();
            }),
            catchError(error => {
              return observableOf(ProductActions.loadFailed());
            }),
          );
      }
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService) {}
}
