type TextProps = {
    text: string,
    className: any,
};
export default function Text(props: TextProps) {
    return (
        <div className={`body-text-grey-bold ${props.className}`}>
            {props.text}
        </div>
    )
}
