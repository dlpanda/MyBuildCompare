import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};
export default function Meta(props: IMetaProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        // canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          locale: AppConfig.locale,
          // url: props.canonical,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  )
}

