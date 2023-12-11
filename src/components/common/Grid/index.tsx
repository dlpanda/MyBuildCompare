
import { ReactNode } from 'react';
type GridProps = {
    className?: string,
    cols?: number,
    children: ReactNode;
};
export default function Grid(props: GridProps) {
    const {cols = 3} = props
    const colsClassName = `grid-cols-${cols}`
    return (
        <div className={`grid ${colsClassName}  ${props.className}`}>
            {props.children}
        </div>
    )
}
