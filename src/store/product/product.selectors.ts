import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectProductState = (state: RootState) => state.product;

export const selectProducts = createSelector([selectProductState], productState => productState.products);
