import { PropsWithChildren } from 'react';

type PopupProps = PropsWithChildren<{}>;

export default function Popup({ children }: PopupProps) {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-popup z-50">
            {children}
        </div>
    );
}
