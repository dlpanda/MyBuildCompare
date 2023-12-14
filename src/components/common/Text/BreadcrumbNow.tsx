type TextProps = {
    text: string,
};
export default function Text(props: TextProps) {
    return (
        <div className='breadcrumb-now inline-block'>
            {props.text}
        </div>
    )
}
