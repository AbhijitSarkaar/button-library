import { ReactNode } from 'react';

type typeVariant = 'outline' | 'text';
type typeSize = 'sm' | 'md' | 'lg';
type typeColor = 'default' | 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
    name: string;
    variant?: typeVariant;
    size?: typeSize;
    color?: typeColor;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}
