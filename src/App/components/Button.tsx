import React from 'react';
import { ButtonProps } from '../interfaces/Button';
import styled from 'styled-components';

const Button = (props: ButtonProps) => {
    const { name } = props;
    return (
        <ButtonContainer data-testid="button-container">{name}</ButtonContainer>
    );
};

const ButtonContainer = styled.div``;

export default Button;
