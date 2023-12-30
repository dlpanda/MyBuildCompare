type LineBottomProps = {
    width?: string;
    height?: string;
    color?: string;
    className?: string;
};

export default function LineBottom(props: LineBottomProps) {
    const { width = '100%', height = '1px', color = '#2CE8CB' } = props;
    const { width = '1px', height = '3.125rem', color = '#D9D9D9' } = props;
    const lineHeight = height;
    return (
        <template>
            <div
                style={{ width: width, height: height, background: color }}
            ></div>
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
        </template>
    );
}
