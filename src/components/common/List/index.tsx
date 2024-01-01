// extends item types

import { ReactNode } from 'react';

// type ListProps = {
//   items: any;
// };

// export default function List(props: ListProps) {
//   return (
//     <div className="text-base body-text ">
//       {props.items.map((v: any) => {
//         return <div key={v.title}>{v.title}</div>;
//       })}
//     </div>
//   );
// }

type Item = { title: string };

type ListProps<T> = {
    items: T[];
    renderItem?: (item: T, index: number) => ReactNode;
};

export default function List<T extends Item>({
    items,
    renderItem,
}: ListProps<T>) {
    return (
        <div className="text-base body-text ">
            {items.map((v, i) => {
                return (
                    <div key={v.title}>
                        {v.title} <div>{renderItem?.(v, i)}</div>
                    </div>
                );
            })}
        </div>
    );
}

// type Student = { title: string; age: number };

// const Samples = [
//   { title: 'a', age: 0 },
//   { title: 'b', age: 1 },
// ] as Student[];

// const Test = () => {
//   const renderItem = useCallback((item: Student) => {
//     return <></>;
//   }, []);

//   return <List items={Samples} renderItem={renderItem}></List>;
// };
