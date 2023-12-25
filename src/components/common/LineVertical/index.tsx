type LineVerticalProps = {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
};
export default function LineBottom(props: LineVerticalProps) {
  const { width = '1px', height = '3.125rem', color = '#D9D9D9' } = props;
  const lineHeight = height;
  return (
    <div
      className={`inline-block ${props.className}`}
      style={{
        width: width,
        height: height,
        background: color,
        lineHeight: lineHeight,
      }}
    >
      &nbsp;
    </div>
  );
}
