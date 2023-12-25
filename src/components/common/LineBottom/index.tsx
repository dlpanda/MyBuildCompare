type LineBottomProps = {
  width?: string;
  height?: string;
  color?: string;
};
export default function LineBottom(props: LineBottomProps) {
  const { width = '100%', height = '1px', color = '#2CE8CB' } = props;
  return (
    <div style={{ width: width, height: height, background: color }}></div>
  );
}
