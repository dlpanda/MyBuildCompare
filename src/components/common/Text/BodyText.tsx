import { PropsWithChildren } from 'react';

type TextVariant = 'default' | 'grey' | 'grey-bold' | 'light' | 'under-lined';

type TextProps = PropsWithChildren<{
    className?: string;
    variant?: TextVariant;
}>;

// TODO PAN
export default function Text({ className, variant = 'default' }: TextProps) {
    return <div className={`body-text ${props.className}`}>{props.text}</div>;
}
