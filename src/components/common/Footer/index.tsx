import Facebook from '@/assets/index/facebook.png';
import Instagram from '@/assets/index/instagram.png';
import Pinterest from '@/assets/index/pinterest.png';
import { PropsWithChildren } from 'react';
import Icon from '../Icon';

type Message = { label: string };

type FooterProps = PropsWithChildren<{
    messageData: Message[];
}>;

export default function Footer({ children, messageData }: FooterProps) {
    return (
        <footer className="px-20 bg-[#F9FCFC]">
            {children}
            <div className="h-[4.375rem] leading-[4.375rem] body-text">
                {messageData.map((v) => {
                    return (
                        <span className="mr-5" key={v.label}>
                            {v.label}
                        </span>
                    );
                })}
                <div className="flex mt-[1.25rem] float-right gap-[0.625rem]">
                    {[Instagram, Facebook, Pinterest].map((v, i) => {
                        return (
                            <Icon
                                key={i}
                                iconSrc={v}
                                iconWidth={30}
                                iconHeight={30}
                            />
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
