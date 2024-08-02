import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../models/product.model';

interface ProductStateModel {
    products: ProductModel[];
}

const initialState: ProductStateModel = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction(state, action: PayloadAction<ProductModel[]>) {
            state.products = [...action.payload, ...state.products];
        },
    },
});

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer;
