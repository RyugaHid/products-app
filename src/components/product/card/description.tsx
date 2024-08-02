import React, { useState, useMemo, useCallback } from 'react';
import { Button } from '@mui/material';

const DEFAULT_MAX_LENGTH = 150;

interface DescriptionProps {
    text: string;
    maxLength?: number;
}

const Description: React.FC<DescriptionProps> = ({ text, maxLength = DEFAULT_MAX_LENGTH }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = useCallback(() => {
        setIsExpanded(prevState => !prevState);
    }, []);

    const displayedText = useMemo(() => {
        if (text.length <= maxLength || isExpanded) {
            return text;
        }
        return `${text.slice(0, maxLength)}...`;
    }, [text, maxLength, isExpanded]);

    return (
        <div>
            <div>{displayedText}</div>
            {text.length > maxLength && (
                <Button
                    variant='contained'
                    onClick={handleToggle}
                    sx={{
                        m: 1,
                    }}
                >
                    {isExpanded ? 'Hide Details' : 'Show Details'}
                </Button>
            )}
        </div>
    );
};

export default Description;
