import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
// 组件
import { Button, Dialog, Gap, Input, Popup, Title } from '@/components/common';
// 图片
import '@/styles/color.css';
import '@/styles/common.css';

export default function HouseDesigns() {
    const inputClassName =
        'text-[#0D544E] p-4 w-full outline-none border border-[#888888] rounded-md placeholder:text-[#0D544E] placeholder:opacity-50';

    return (
        <Main
            meta={
                <Meta
                    title={AppConfig.title}
                    description={AppConfig.description}
                />
            }
        >
            <Popup>
                <Dialog className="!w-[45%] mt-[10rem] mobile:!w-[90%] bg-white py-20 px-20 rounded-md !h-auto">
                    <Title variant="6">Get in Touch</Title>
                    <Gap size={30}></Gap>
                    <Input
                        className={inputClassName}
                        placeholder="Full Name*"
                    ></Input>
                    <Gap size={10}></Gap>
                    <Input
                        className={inputClassName}
                        placeholder="Phone"
                    ></Input>
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
                    <Gap size={40}></Gap>
                    <Link className="flex" href="/IndividualBuilder">
                        <Button className="w-full text-center blue-green-gradient text-white">
                            Submit Enquiry
                        </Button>
                    </Link>
                    <Gap size={50}></Gap>
                </Dialog>
            </Popup>
        </Main>
    );
}
