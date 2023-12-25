type TitleProps = {
  text: string;
  className?: string;
};
export default function Title(props: TitleProps) {
  return <div className={`title-2 ${props.className}`}>{props.text}</div>;
}
