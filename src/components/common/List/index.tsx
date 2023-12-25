// extends item types

type ListProps = {
  items: any;
};

export default function List(props: ListProps) {
  return (
    <div className="text-base body-text ">
      {props.items.map((v: any) => {
        return <div key={v.title}>{v.title}</div>;
      })}
    </div>
  );
}
