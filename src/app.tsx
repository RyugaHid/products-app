import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsApi } from './services/product-api.service';
import { selectProducts } from './store/product/product.selectors';
import { setProductsAction } from './store/product/product.slice';
import ProductCard from './components/product/card/product-card.component';
import ProductCreationContainer from './components/productCreationContainer';

const ProductListContainer: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchProductsApi();
                dispatch(setProductsAction(response.data));
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            <ProductCreationContainer />
            {products.length > 0 ? (
                products.map(product => <ProductCard key={product.id} {...product} />)
            ) : (
                <div>No products found</div>
            )}
        </div>
    );
};

export default ProductListContainer;
