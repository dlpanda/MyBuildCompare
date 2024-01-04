import '@/styles/color.css';
import '@/styles/common.css';
import '@/styles/global.css';
import '@/styles/index.css';
import type { ReactNode } from 'react';
import { useCallback, useState } from 'react';
// 配置
import { FooterMessage } from '@/utils/FooterConfig';
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
import sanity, { GetAllSettingsQuery } from '@/services/sanity';
// import Footer from '@/components/common/Footer';
// import Grid from '@/components/common/Grid';
// import LineBottom from '@/components/common/LineBottom';
// import Menu from '@/components/common/Menu';
// import Navbar from '@/components/common/Navbar';
// import SearchBar from '@/components/common/SearchBar';
// 图片
import Logo from '@/assets/index/logo.png';

type MainProps = {
    meta?: ReactNode;
    children: ReactNode;
};
export default function Main({ meta, children }: MainProps) {
    const [searchValue, setsearchValue] = useState('');
    const getSearchValue = (value: string) => {
        console.log('searchValue：' + value);
        setsearchValue(value);
    };
    const [footerLinkGroups, setFooterLinkGroups] = useState([]);
    const loadFooterData = useCallback(async () => {
        const data: GetAllSettingsQuery['allSettings'] =
            await sanity.getAllSettings({
                limit: 1,
                offset: 0,
            });
        setFooterLinkGroups(() => data[0].footerLinkGroups);
    }, []);
    loadFooterData();
    return (
        <div>
            {meta}
            <Navbar logoUrl={Logo}>
                <Menu menuList={MenuConfig}>
                    <SearchBar
                        clickSearch={getSearchValue}
                        placeholder={'Search Category 2...'}
                    ></SearchBar>
                </Menu>
            </Navbar>
            {children}
            <Line></Line>
            <Footer messageData={FooterMessage}>
                <div>
                    <Grid
                        cols="3"
                        tabletCols="2"
                        mobileCols="2"
                        className="gap-6 py-[4.125rem]"
                    >
                        {footerLinkGroups.map((v: any) => {
                            return (
                                <div
                                    className="dark-grey font-semibold cursor-default"
                                    key={v._key}
                                >
                                    {v.title}
                                    {v.children.map((vv: any) => {
                                        return (
                                            <div
                                                key={vv._key}
                                                className="text-base body-text cursor-pointer"
                                            >
                                                <a
                                                    href={vv.link.url}
                                                    className="hover:underline"
                                                >
                                                    {vv.link.text}
                                                </a>
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
