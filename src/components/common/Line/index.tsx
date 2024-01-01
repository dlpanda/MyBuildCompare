import clsx from 'clsx';
type LineProps = {
    width?: string;
    height?: string;
    color?: string;
    className?: string;
    direction?: 'verical' | undefined;
};

export default function Line({
    width = '100%',
    height = '1px',
    color = '#2CE8CB',
    direction,
    className,
}: LineProps) {
    const classNames = clsx(
        `${className} leading[${direction === 'verical' ? height : 0}]`,
        {
            'inline-block': direction === 'verical',
        }
    );
    const lineHeight = direction === 'verical' ? height : 0;
    return (
        <div
            className={classNames}
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
