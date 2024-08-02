import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    defaultValue?: string;
}

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Input: React.FC<InputProps> = ({ defaultValue, value, onChange, className, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    return <StyledInput value={innerValue} onChange={handleChange} className={className} {...rest} />;
};

export default Input;
