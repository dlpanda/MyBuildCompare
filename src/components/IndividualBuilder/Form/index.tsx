import { Button, Gap, Input, Text } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
// 图片
import houseLogo from '@/assets/individual-builder/logo.png';

type FormProps = {
    // text: string,
};

export default function Form(props: FormProps) {
    const inputClassName =
        'text-[#0D544E] p-4 w-full outline-none border border-[#888888] rounded-md placeholder:text-[#0D544E] placeholder:opacity-50';
    return (
        <div className="button-box-shadow px-8 rounded-md bg-cover">
            <Gap size={50}></Gap>
            <div className="flex">
                <div className="w-[8.75rem]">
                    <Image
                        className="w-full rounded-md"
                        src={houseLogo}
                        alt="img"
                        width={140}
                        height={140}
                        priority
                    />
                </div>
                <div className="flex flex-1 flex-col pl-4">
                    <Gap size={20}></Gap>
                    <Text>License No. 276763C</Text>
                    <Text>Since YYYY</Text>
                    <Gap size={30}></Gap>
                    <Text variant="underlined-links">
                        Visit Builder Website
                    </Text>
                </div>
            </div>
            <div className="tablet:hidden mobile:hidden">
                <Gap size={30}></Gap>
                <Input
                    className={inputClassName}
                    placeholder="Full Name*"
                ></Input>
                <Gap size={10}></Gap>
                <Input className={inputClassName} placeholder="Phone"></Input>
                <Gap size={10}></Gap>
                <Input
                    className={inputClassName}
                    placeholder="Email Address*"
                ></Input>
                <Gap size={10}></Gap>
                <Input
                    className={inputClassName}
                    placeholder="Postcode"
                ></Input>
                <Gap size={10}></Gap>
                <Input
                    className={inputClassName}
                    placeholder="Message*"
                ></Input>
            </div>
            <Gap size={10}></Gap>
            <Button className="w-full text-center blue-green-gradient tablet:hidden mobile:hidden">
                Submit Enquiry
            </Button>
            <Link className="flex" href="/DialogForm">
                <Button className="w-full text-center blue-green-gradient hidden tablet:block mobile:block">
                    Enquire
                </Button>
            </Link>
            <Gap size={50}></Gap>
        </div>
    );
}
