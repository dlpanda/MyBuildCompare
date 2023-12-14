type TextProps = {
    text: string,
};
export default function Text(props: TextProps) {
    return (
        <div className='breadcrumb-history'>
            {props.text}
        </div>
    )
}
