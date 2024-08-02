import React, { useState } from 'react';
import Input from './input';
import { Button } from '@mui/material';
import { ProductModel } from '../models/product.model';
interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            setError('Title is required');
            return;
        }
        setError('');
        onSubmit({ title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <Input value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <Button type='submit'>Create</Button>
        </form>
    );
};

export default ProductCreationForm;
