import React, { memo, FC } from 'react';
import styled from 'styled-components';
import Description from './description';

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 0px;
    text-align: center;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid rgb(154 96 96);
    box-sizing: border-box;
    width: 1000px;
`;
const StyledPrice = styled.p`
    text-align: center;
    margin: 0;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledTitle = styled.h2`
    font-size: 20px;
    font-weight: 800;
    margin: 0;
`;
const StyledDescription = styled.p`
    margin: 0;
`;
const StyledDescTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
    gap: 20px;
`;
const StyledImage = styled.img`
    align-self: center;
    height: 250px;
`;

interface ProductCardProps {
    title: string;
    image: string;
    price: number;
    description: string;
}

const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return (
        <StyledContainer>
            <StyledImage
                src={image}
                alt=''
                style={{
                    maxWidth: '250px',
                }}
            />
            <StyledDescTitleContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>
                    <Description text={description} />
                </StyledDescription>
            </StyledDescTitleContainer>
            <StyledPrice>Price ${price}</StyledPrice>
        </StyledContainer>
    );
};
export default memo(ProductCard);
