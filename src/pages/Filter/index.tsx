import Meta from '@/layouts/Meta';
import Main from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import Link from 'next/link';
// 组件
import ButtonGroup from '@/components/MybuildCompare/ButtonGroup';
import {
    Button,
    CheckBox,
    Dialog,
    Gap,
    Grid,
    Input,
    Line,
    Popup,
    Text,
    Title,
} from '@/components/common';
// 图片
import '@/styles/color.css';
import '@/styles/common.css';

export default function Filter() {
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
                <Dialog className="relative my-[40px] !h-[calc(100%-80px)] px-8 py-4 bg-white rounded-md mobile:my-0 mobile:mt-8 mobile:!h-[calc(100%-2rem)] mobile:!w-full">
                    <Gap size={15}></Gap>
                    <div className="absolute top-4 left-8 text-2xl">
                        <Link className="flex" href="/HouseDesigns">
                            x
                        </Link>
                    </div>
                    <Text variant="grey-bold" className="w-full text-center">
                        Filter
                    </Text>
                    <Gap size={15}></Gap>
                    <Line color="#EFEFEF"></Line>
                    <Gap size={15}></Gap>
                    <Title variant="6">Rooms and Parking</Title>
                    <Gap size={15}></Gap>
                    <ButtonGroup title="Bedrooms"></ButtonGroup>
                    <Gap size={20}></Gap>
                    <ButtonGroup title="Bathrooms"></ButtonGroup>
                    <Gap size={20}></Gap>
                    <ButtonGroup title="Garage"></ButtonGroup>
                    <Gap size={15}></Gap>
                    <Line color="#EFEFEF"></Line>
                    <Gap size={15}></Gap>
                    <Title variant="6">Land Dimension (㎡)</Title>
                    <Gap size={15}></Gap>
                    <div className="flex">
                        <div className="py-2 px-3 border border-[#D1D1D1] w-[40%] rounded-xl">
                            <p className="text-[#6E6E6E] text-[0.875rem]">
                                Block Width
                            </p>
                            <Input inputValue="0"></Input>
                        </div>
                        <div className="w-[20%] text-center leading-[4.125]">
                            ——
                        </div>
                        <div className="py-2 px-3 border border-[#D1D1D1] w-[40%] rounded-xl">
                            <p className="text-[#6E6E6E] text-[0.875rem]">
                                Block Length
                            </p>
                            <Input inputValue="0"></Input>
                        </div>
                    </div>
                    <Gap size={15}></Gap>
                    <Line color="#EFEFEF"></Line>
                    <Gap size={15}></Gap>
                    <Title variant="6">Inclusions</Title>
                    <Gap size={15}></Gap>
                    <Text variant="grey">Must Haves</Text>
                    <Gap size={10}></Gap>
                    <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
                        {new Array(6).fill('').map((vv: any, ii: number) => {
                            return (
                                <div key={ii} className={`mb-[20px]`}>
                                    <CheckBox isChecked={false}>
                                        Alfresco
                                    </CheckBox>
                                </div>
                            );
                        })}
                    </Grid>
                    <Gap size={10}></Gap>
                    <Text variant="underlined-links">Show all inclusions</Text>
                    <Gap size={15}></Gap>
                    <Line color="#EFEFEF"></Line>
                    <Gap size={15}></Gap>
                    <Title variant="6">Builders</Title>
                    <Gap size={10}></Gap>
                    <Grid className="grid-cols-2 gap-x-[20px] mobile:grid-cols-1">
                        {new Array(6).fill('').map((vv: any, ii: number) => {
                            return (
                                <div key={ii} className={`mb-[20px]`}>
                                    <CheckBox isChecked={false}>
                                        Alfresco
                                    </CheckBox>
                                </div>
                            );
                        })}
                    </Grid>
                    <Gap size={10}></Gap>
                    <Text variant="underlined-links">Show all Builders</Text>
                    <Gap size={15}></Gap>
                    <Line color="#EFEFEF"></Line>
                    <div className="inline-block w-1/2">
                        <Gap size={15}></Gap>
                        <Text
                            variant="underlined-links"
                            className={`text-[#3D3D3D]`}
                        >
                            Clear All
                        </Text>
                        <Gap size={15}></Gap>
                    </div>
                    <div className="inline-block w-1/2 text-right">
                        <Gap size={10}></Gap>
                        <Button className="green-gradient">
                            Apply filters
                        </Button>
                    </div>
                </Dialog>
            </Popup>
        </Main>
    );
}
