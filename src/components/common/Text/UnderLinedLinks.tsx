type TextProps = {
    text: string,
    className?: any,
};
export default function Text(props: TextProps) {
    return (
        <div className={`underlined-links ${props.className}`}>
            {props.text}
        </div>
    )
}
