type TextProps = {
  text: string;
  className?: string;
};
export default function Text(props: TextProps) {
  return (
    <div className={`body-text-light ${props.className}`}>{props.text}</div>
  );
}
