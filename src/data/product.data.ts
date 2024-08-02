// src/services/product-api.service.ts
import axios, { AxiosResponse } from 'axios';
import { productsURL } from '../constants/URL';
import { ProductModel } from '../models/product.model';

export const productListData = async (): Promise<AxiosResponse<ProductModel[]>> => {
    return axios.get<ProductModel[]>(productsURL);
};
