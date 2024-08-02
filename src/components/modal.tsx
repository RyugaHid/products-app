import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../assets/icons/logo.svg';

interface ModalProps {
    title: string;
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Overlay = styled.div<{ visible: boolean }>`
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    z-index: 1000;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eaeaea;
`;

const Title = styled.h2`
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const Content = styled.div`
    padding: 16px;
`;

const Modal: React.FC<ModalProps> = ({ title, visible, onClose, children }) => {
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Overlay visible={visible} onClick={handleOverlayClick}>
            <ModalContainer>
                <Header>
                    <Title>{title}</Title>
                    <CloseButton onClick={onClose}>
                        <CloseIcon width={20} height={20} fill='#ctctca' />
                    </CloseButton>
                </Header>
                <Content>{children}</Content>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
