type GapProps = {
  size: number;
  direction?: string;
  className?: string;
};

// usememo
export default function Gap(props: GapProps) {
  let width, height, myClassName;

  if (props.direction === 'verical') {
    width = props.size / 16 + 'rem';
    height = '100%';
    myClassName = 'inline-block ' + props.className;
  } else {
    width = '100%';
    height = props.size / 16 + 'rem';
    myClassName = props.className;
  }

  return <div className={myClassName} style={{ width, height }}></div>;
}
