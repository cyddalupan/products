import { Action, createReducer, on } from "@ngrx/store";
import * as ProductActions from "./actions";
import { Product } from "../product";
import { DataStatus } from "../datastatus";

/** Feature name of product feature store. */
export const PRODUCT_FEATURE_NAME = "briefing";

/** Model of the product state. */
export interface ProductState {
  Data: Product[];
  DataStatus: DataStatus;
}

export const initialState: ProductState = {
  Data: [],
  DataStatus: DataStatus.INITIAL
};

function updateFolderList(current: Product[], result: Product[]) {
  let output = current;
  for (const newProduct of result) {
    if (!current.find(val => val.id == newProduct.id)) {
      output = [...output, newProduct]
    }
  }
  return output;
}

const productReducer = createReducer(
  initialState,
  on(ProductActions.loadGetParents, state => ({
    ...state,
    DataStatus: DataStatus.LOADING
  })),
  on(ProductActions.loadGetChildren, state => ({
    ...state,
    DataStatus: DataStatus.LOADING
  })),
  on(ProductActions.loadGetChildrenSubchildren, state => ({
    ...state,
    DataStatus: DataStatus.LOADING
  })),
  on(ProductActions.SaveProduct, (state, param) => ({
    ...state,
    Data: updateFolderList(state.Data, param.data),
    DataStatus: DataStatus.READY,
  })),
  on(ProductActions.loadFailed, state => ({
    ...state,
    DataStatus: DataStatus.ERROR,
  }))
);

/** Reducer function for product feature store. */
export function reducer(state = initialState, action: Action): ProductState {
  return productReducer(state, action);
}
