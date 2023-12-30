import { Button, Gap, Text } from '@/components/common';
import { useState } from 'react';

type ButtonItem = {
    label: string;
    className: string;
};

type ButtonGroupProps = {
    title: string;
    items?: ButtonItem[];
};

export default function ButtonGroup({ title, items }: ButtonGroupProps) {
    const buttonClass = 'mr-3 h-[2.5rem] leading-[2.5rem]';
    const [currentType, setcurrentType] = useState('Any');
    const handleChange = (type: string) => {
        if (type === currentType) {
            setcurrentType('');
        } else {
            setcurrentType(type);
        }
    };

    return (
        <div>
            <Text variant="grey" className="h-[1.375rem] leading-[1.375rem]">
                {title}
            </Text>
            <Gap size={10}></Gap>
            {['Any', '1', '2', '3', '4', '5+'].map((v, i) => {
                return (
                    <Button
                        key={i}
                        className={`${buttonClass} ${
                            currentType === v
                                ? 'bg-[#3D3D3D] text-white'
                                : 'text-[#3D3D3D]'
                        }`}
                        onClick={() => handleChange(v)}
                    >
                        {v}
                    </Button>
                );
            })}
        </div>
    );
}
