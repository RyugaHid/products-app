import React from 'react';
import { Button } from '@mui/material';
interface CreateButtonProps {
    onClick: () => void;
}
const CreateButton: React.FC<CreateButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant='contained'
            onClick={onClick}
            sx={{
                borderRadius: '50%',
                width: 60,
                height: 60,
                position: 'fixed',
                bottom: 20,
                right: 20,
                fontSize: 35,
            }}
        >
            +
        </Button>
    );
};

export default CreateButton;
