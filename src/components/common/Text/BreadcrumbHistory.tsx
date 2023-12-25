type TextProps = {
  text: string;
};
export default function Text(props: TextProps) {
  return (
    <div className="breadcrumb-history inline-block">{props.text} &gt;</div>
  );
}
