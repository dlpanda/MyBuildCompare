import { Text, Title } from '@/components/common';
import Image, { StaticImageData } from 'next/image';
type ColunmItem = {
    id: number;
    iconSrc: StaticImageData;
    text: string;
};

type ColunmProps = {
    dataList: ColunmItem[];
};

export default function Colunm({ dataList }: ColunmProps) {
    return (
        <div className="mx-auto mt-[2.5rem] w-[45rem] flex gap-[2.5rem] text-left mobile:flex-col mobile:gap-[10px] mobile:px-2 mobile:w-auto">
            {dataList.map((v) => {
                return (
                    <div
                        key={v.id}
                        className="h-[15.75rem] mobile:h-auto flex basis-1/3 flex-col border border-[#D9D9D9] rounded-[0.375rem] p-[1.25rem]"
                    >
                        <div className="flex-1">
                            <Image
                                src={v.iconSrc}
                                alt="img"
                                className="icon"
                            ></Image>
                        </div>
                        <Text className="mobile:hidden">{v.id}</Text>
                        <Title variant="6">{v.text}</Title>
                    </div>
                );
            })}
        </div>
    );
}
