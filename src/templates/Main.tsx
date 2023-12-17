
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
import SearchItem from '@/components/MybuildCompare/SearchItem';
import Navbar from '@/components/common/Navbar';
import Menu from '@/components/common/Menu';
import LineBottom from '@/components/common/LineBottom';
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
        <div>
            {props.meta}
            <Navbar logoUrl={Logo} menuTemplate={
                <Menu menuList={MenuConfig}>
                    <SearchBar clickSearch={getSearchValue} placeholder={'Search Category 2...'}></SearchBar>
                </Menu>
            } ></Navbar>
            {props.children}
            <LineBottom></LineBottom>
            <Footer contentTemplate={
                <div>
                    <Grid className="grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-2 gap-6 py-[4.125rem]">
                        {FooterContent.map((v: any) => {
                            return (
                                <div className='dark-grey font-semibold' key={v.title}>
                                    {v.title}
                                    <List items={v.children}></List>
                                </div>
                            )
                        })}
                    </Grid>
                    <LineBottom></LineBottom>
                </div>
            } messageData={FooterMessage}></Footer>
        </div>
    )
}
