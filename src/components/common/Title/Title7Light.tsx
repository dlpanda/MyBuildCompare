type TitleProps = {
    text: string,
};
export default function Title(props: TitleProps) {
    return (
        <div className='title-7-light'>
            {props.text}
        </div>
    )
}
