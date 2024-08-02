import axios from 'axios';
import { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.model';
import { productsURL } from '../constants/URL';

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
    return axios.get<ProductModel[]>(productsURL);
};

export const createProductApi = (product: Partial<ProductModel>): Promise<AxiosResponse<ProductModel>> => {
    return axios.post<ProductModel>(productsURL, product);
};
