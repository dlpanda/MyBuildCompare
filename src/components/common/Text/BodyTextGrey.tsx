type TextProps = {
    text: string,
};
export default function Text(props: TextProps) {
    return (
        <div className='body-text-grey'>
            {props.text}
        </div>
    )
}
