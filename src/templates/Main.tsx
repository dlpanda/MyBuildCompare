import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import type { ReactNode } from 'react';
import '@/styles/global.css'
import '@/styles/common.css'
import '@/styles/color.css'
import '@/styles/index.css'
// 配置
import { MenuConfig } from '@/utils/MenuConfig';
import { FooterContent, FooterMessage } from '@/utils/FooterConfig';
// 组件
import SearchItem from '@/components/index/SearchItem';
import Navbar from '@/components/common/Navbar';
import Menu from '@/components/common/Menu';
import SearchBar from '@/components/common/SearchBar';
import List from '@/components/common/List';
import Grid from '@/components/common/Grid';
import Footer from '@/components/common/Footer';
// 图片
import Logo from '@/assets/index/logo.png'
type IMainProps = {
    meta?: ReactNode;
    children: ReactNode;
};

export default function Main(props: IMainProps) {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log("searchValue：" + value)
        setsearchValue(value)
    }
    return (
        <div className='index'>
            {props.meta}
            <Navbar logoUrl={Logo} menuTemplate={
                <Menu menuList={MenuConfig}>
                    <SearchBar clickSearch={getSearchValue} placeholder={'Search Category 2...'}></SearchBar>
                </Menu>
            } ></Navbar>
            {props.children}
            <Footer contentTemplate={
                <Grid items={FooterContent}>
                    {FooterContent.map((v: any) => {
                        return (
                            <div className='dark-grey font-semibold' key={v.title}>
                                {v.title}
                                <List items={v.children}></List>
                            </div>
                        )
                    })}
                </Grid>
            } messageData={FooterMessage}></Footer>
        </div>
    )
}
