import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsApi } from '../services/product-api.service';
import { setProductsAction } from '../store/product/product.slice';

export const useProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetchProductsApi();
                dispatch(setProductsAction(response.data));
            } catch (error) {
                console.error('Failed to load products', error);
            }
        };

        loadProducts();
    }, [dispatch]);
};
