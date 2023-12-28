import Image from 'next/image';
import Link from 'next/link';

// TODO PAN
// data item type?
type BlogsProps = {
  className: string;
  dataList: any;
};

export default function Blogs(props: BlogsProps) {
  return (
    <div className={`grid grid-cols-2 gap-10 my-10 ${props.className}`}>
      {props.dataList.map((v: any) => {
        return (
          <div key={v.id} className="flex tablet:block">
            <div className="flex-1">
              <Image
                className="rounded-[0.75rem] w-full"
                src={v.imgSrc}
                alt="icon"
                priority
              />
            </div>
            <div className="content w-1/2 pl-4 tablet:w-full tablet:pl-0">
              <Link className="flex" href="/IndivdualStory">
                <p className="title-6">{v.title}</p>
              </Link>
              <p className="body-text tablet:pt-2">
                Written By <span className="underlined-links">{v.author}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
