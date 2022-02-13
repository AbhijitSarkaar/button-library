import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    name: string;
}

const Button = (props: IButtonProps) => {
    const { name } = props;
    return (
        <ButtonContainer data-testid="button-container">{name}</ButtonContainer>
    );
};

const ButtonContainer = styled.div``;

export default Button;
