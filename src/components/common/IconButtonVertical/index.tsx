
import { ReactNode } from 'react';
type IconButtonVerticalProps = {
    className?: string,
    text: number,
    icon: ReactNode;
};
export default function IconButtonVertical(props: IconButtonVerticalProps) {
    return (
        <div className={`IconButtonVertical ${props.className}`}>
        </div>
    )
}
