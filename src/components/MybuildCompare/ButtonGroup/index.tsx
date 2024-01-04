import { Button, Gap, Text } from '@/components/common';

type ButtonItem = {
    label: string;
    className?: string;
};

type ChangeArgs = {
    type: 'add' | 'remove';
    index: number;
};

type ButtonGroupProps = {
    title: string;
    items: ButtonItem[];
    selectedIndexes?: number[];
    onChange?: (args: ChangeArgs) => void;
};

export default function ButtonGroup({
    title,
    items,
    selectedIndexes,
    onChange,
}: ButtonGroupProps) {
    const buttonClass = 'mr-2 h-[2.5rem] leading-[2.5rem]';

    return (
        <div>
            <Text variant="grey" className="h-[1.375rem] leading-[1.375rem]">
                {title}
            </Text>
            <Gap size={10}></Gap>
            {items.map(({ label }, i) => {
                return (
                    <Button
                        key={i}
                        className={`${buttonClass} ${
                            selectedIndexes.includes(i)
                                ? 'bg-[#3D3D3D] text-white'
                                : 'text-[#3D3D3D]'
                        }`}
                        onClick={() =>
                            onChange?.({
                                type: selectedIndexes.includes(i)
                                    ? 'remove'
                                    : 'add',
                                index: i,
                            })
                        }
                    >
                        {label}
                    </Button>
                );
            })}
        </div>
    );
}
