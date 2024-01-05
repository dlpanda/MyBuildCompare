import house from '@/assets/icon/select-icon.png';
import Image from 'next/image';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';

type SelectItem = {
    id: number | string;
    title: string;
};

type SelectProps = {
    label: string;
    items: SelectItem[];
    onSelectChange?: (item: SelectItem) => void;
};

export default function Select({ label, items }: SelectProps) {
    const [currentLabel, setCurrentLabel] = useState(label);
    const [dropDown, setDropDown] = useState(false);
    const handleClick = useCallback((e: SyntheticEvent) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setDropDown((pre) => !pre);
    }, []);
    const handleClickClose = useCallback(() => {
        setDropDown(() => false);
    }, []);
    useEffect(() => {
        document.addEventListener('click', handleClickClose);
        return () => {
            document.removeEventListener('click', handleClickClose);
        };
    }, [handleClickClose]);
    // 选中更新
    const selectChange = useCallback((item: SelectItem) => {
        setCurrentLabel(() => item.title);
        // onSelectChange(item);
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-wrap text-center border text-[#3D3D3D] h-12 leading-[3rem] rounded-md font-[500]">
                <div className="w-[calc(100%-30px)]" onClick={handleClick}>
                    {currentLabel}
                </div>
                <div className="w-[30px]">
                    <Image
                        className="relative top-[50%] mt-[-4px]"
                        src={house}
                        alt="icon"
                        width={14}
                        height={8}
                        priority
                    />
                </div>
            </div>
            <div
                className={`w-full absolute z-50 leading-10 px-4 border border-t-0 bg-white ${
                    dropDown ? 'block ' : 'hidden'
                }`}
            >
                {items.map((item: SelectItem) => {
                    return (
                        <div
                            key={item.id}
                            className={` bg-white hover:bg-slate-200`}
                            onClick={() => {
                                selectChange(item);
                            }}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
