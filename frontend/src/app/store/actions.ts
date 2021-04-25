import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const loadGetParents = createAction("[Product] Load Get Parents");
export const loadGetChildren = createAction(
  "[Product] Load Get Children",
  props<{ readonly id: number }>()
);
export const loadGetChildrenSubchildren = createAction(
  "[Product] Load Get Children and Sub Children",
  props<{ readonly id: number }>()
);

export const SaveProduct = createAction(
  "[Product] Save Product",
  props<{ readonly data: Product[] }>()
);

export const loadFailed = createAction("[Product] Load Failed");
