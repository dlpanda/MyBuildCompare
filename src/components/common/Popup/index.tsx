import { ReactNode } from 'react';

// typing
type PopupProps = {
  children: ReactNode;
};

export default function Popup(props: PopupProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-popup z-50">
      {props.children}
    </div>
  );
}
