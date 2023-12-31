import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import Meta from "@/layouts/Meta";
import Main from "@/templates/Main";
import { DataList } from "@/utils/DataList";
// 组件
import Popup from "@/components/common/Popup";
import Dialog from "@/components/common/CommonDialog";
import Gap from "@/components/common/Gap";
// 图片
import HousePNG1 from "@/assets/photos/1.png";
import BackPNG from "@/assets/icon/left-arrow.png";
import "@/styles/common.css";
import "@/styles/color.css";
import { GetStaticProps } from "next";
import sanity, { GetArticlesQuery } from "@/services/sanity";

type Props = {
  data: GetArticlesQuery["allArticle"];
};

export default function HouseDesigns({ data }: Props) {
  console.log(data[0]?.title);

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Popup>
        <Dialog>
          <Link href="/IndividualHouseDesigns">
            <Image
              className="absolute left-20 top-20"
              src={BackPNG}
              alt="carouselImg"
              width={32}
              height={32}
              priority
            />
          </Link>
          <Gap size={75}></Gap>
          <Image
            className="w-full"
            src={HousePNG1}
            alt="carouselImg"
            width={686}
            height={458}
            priority
          />
          <Gap size={20}></Gap>
          <Image
            className="inline-block w-[calc(50%-0.625rem)] mr-[1.25rem]"
            src={HousePNG1}
            alt="carouselImg"
            width={333}
            height={222}
            priority
          />
          <Image
            className="inline-block w-[calc(50%-0.625rem)]"
            src={HousePNG1}
            alt="carouselImg"
            width={333}
            height={222}
            priority
          />
          <Gap size={20}></Gap>
          <Image
            className="w-full"
            src={HousePNG1}
            alt="carouselImg"
            width={686}
            height={458}
            priority
          />
          <Gap size={75}></Gap>
        </Dialog>
      </Popup>
    </Main>
  );
}
