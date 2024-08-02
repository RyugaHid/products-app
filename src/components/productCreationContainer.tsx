import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './modal';
import CreateButton from './product/addButton';
import ProductCreationForm from './ProductCreationForm';
import { createProductApi } from '../services/product-api.service';
import { ProductModel } from '../models/product.model';
import { setProductsAction } from '../store/product/product.slice';
import { selectProducts } from '../store/product/product.selectors';

const ProductCreationContainer: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleSubmit = async (product: Partial<ProductModel>) => {
        try {
            const response = await createProductApi(product);
            const createdProduct = response.data;
            dispatch(setProductsAction([createdProduct, ...products]));
        } catch (error) {
            console.error('Failed to create product', error);
        } finally {
            handleModalClose();
        }
    };

    return (
        <>
            <CreateButton onClick={handleModalOpen} />
            <Modal title='Create Product' visible={modalVisible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </>
    );
};

export default ProductCreationContainer;
