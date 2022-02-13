import React from 'react';
import { ButtonProps } from '../interfaces/Button';
import styled from 'styled-components';

const Button = (props: ButtonProps) => {
    const { name, variant, color, size, disabled, startIcon, endIcon } = props;

    const getColor = (color: string) => {
        switch (color) {
            case 'primary':
                return '#2962FF';
            case 'secondary':
                return '#455A64';
            case 'danger':
                return '#D32F2F';
            default:
                return '#E0E0E0';
        }
    };

    const getHeightAndWidth = (size: string) => {
        switch (size) {
            case 'sm':
                return [32, 73];
            case 'md':
                return [36, 81];
            case 'lg':
                return [42, 93];
        }
        return [36, 81];
    };

    const compute = () => {
        let description = '<Button';
        if (variant) {
            description += ` variant="${variant}"`;
        }
        if (color) {
            description += ` color="${color}"`;
        }
        if (size) {
            description += ` size="${size}"`;
        }
        if (disabled) {
            description += ` disabled`;
        }
        if (startIcon) {
            description += ` startIcon`;
        }
        if (endIcon) {
            description += ` endIcon`;
        }
        description += ' />';
        return description;
    };

    const description = compute();
    const [height, width] = getHeightAndWidth(size);

    return (
        <ButtonContainer data-testid="button-container">
            <Description>{description}</Description>
            <Content
                backgroundcolor={getColor(color)}
                height={height}
                width={width}
                disabled={disabled}
                isOutline={variant === 'outline'}
            >
                {startIcon && startIcon}
                <Text>{name}</Text>
                {endIcon && endIcon}
            </Content>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    color: #3f3f3f;
`;
const Description = styled.div`
    margin-top: 20px;
    font-size: 12px;
`;
const Content = styled('div')((props: ContentStyles) => {
    let { backgroundcolor, height, width, disabled, isOutline } = props;
    let border = 'none';
    let color = backgroundcolor === '#E0E0E0' ? 'black' : 'white';
    if (isOutline) {
        border = `2px solid ${backgroundcolor}`;
        color = backgroundcolor;
        backgroundcolor = 'white';
    }
    return {
        marginTop: '12px',
        marginLeft: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        height: `${height}px`,
        width: `${width}px`,
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
        borderRadius: '6px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        border,
        backgroundColor: backgroundcolor,
        color,
        opacity: disabled ? '0.5' : '1',
    };
});

const Text = styled.div``;

interface ContentStyles {
    backgroundcolor: string;
    height: number;
    width: number;
    disabled: boolean;
    isOutline: boolean;
}

export default Button;
