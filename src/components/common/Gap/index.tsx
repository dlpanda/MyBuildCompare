
type GapProps = {
    size: number,
    direction?: string,
    className?: string,
};
export default function Gap(props: GapProps) {
    let width, height
    if (props.direction === 'verical') {
        width = props.size / 16 + 'rem'
        height = '100%'
    } else {
        width = '100%'
        height = props.size / 16 + 'rem'
    }
    return (
        <div className={props.className} style={{ width, height }}></div>
    )
}
