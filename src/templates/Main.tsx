import '@/styles/color.css';
import '@/styles/common.css';
import '@/styles/global.css';
import '@/styles/index.css';
import type { ReactNode } from 'react';
import { useState } from 'react';
// 配置
import { FooterContent, FooterMessage } from '@/utils/FooterConfig';
import { MenuConfig } from '@/utils/MenuConfig';
// 组件
import {
    Footer,
    Grid,
    Line,
    Menu,
    Navbar,
    SearchBar,
} from '@/components/common';
// import Footer from '@/components/common/Footer';
// import Grid from '@/components/common/Grid';
// import LineBottom from '@/components/common/LineBottom';
// import Menu from '@/components/common/Menu';
// import Navbar from '@/components/common/Navbar';
// import SearchBar from '@/components/common/SearchBar';
// 图片
import Logo from '@/assets/index/logo.png';
type IMainProps = {
    meta?: ReactNode;
    children: ReactNode;
};

export default function Main(props: IMainProps) {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setsearchValue(value);
    };
    return (
        <div>
            {props.meta}
            <Navbar logoUrl={Logo}>
                <Menu menuList={MenuConfig}>
                    <SearchBar
                        clickSearch={getSearchValue}
                        placeholder={'Search Category 2...'}
                    ></SearchBar>
                </Menu>
            </Navbar>
            {props.children}
            <Line></Line>
            <Footer messageData={FooterMessage}>
                <div>
                    <Grid
                        cols="3"
                        tabletCols="2"
                        mobileCols="2"
                        className="gap-6 py-[4.125rem]"
                    >
                        {FooterContent.map((v: any) => {
                            return (
                                <div
                                    className="dark-grey font-semibold cursor-default"
                                    key={v.title}
                                >
                                    {v.title}
                                    {v.children.map((v: any) => {
                                        return (
                                            <div
                                                key={v.title}
                                                className="text-base body-text cursor-pointer"
                                            >
                                                <span className="hover:underline">
                                                    {v.title}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </Grid>
                    <Line></Line>
                </div>
            </Footer>
        </div>
    );
}
