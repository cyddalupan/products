import { createSelector } from '@ngrx/store';
import { ProductState } from './reducers';
 
export interface AppState {
  product: ProductState;
}
 
export const selectProduct = (state: AppState) => state.product;
 
export const selectDataStatus = createSelector(
  selectProduct,
  (state: ProductState) => state.DataStatus);

export const selectData = createSelector(
  selectProduct,
  (state: ProductState, props: {parentId: number}) => {
    return state.Data.filter(product => product.parent_id == props.parentId);
  });