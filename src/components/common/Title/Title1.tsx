type TitleProps = {
    text: string,
};
export default function Title(props: TitleProps) {
    return (
        <div className='title-1'>
            {props.text}
        </div>
    )
}
