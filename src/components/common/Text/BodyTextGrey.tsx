type TextProps = {
    text: string,
    className?: string,
};
export default function Text(props: TextProps) {
    return (
        <div className={`body-text-grey ${props.className}`}>
            {props.text}
        </div>
    )
}