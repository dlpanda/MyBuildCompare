type TitleProps = {
    text: string,
};
export default function Title(props: TitleProps) {
    return (
        <div className='title-4'>
            {props.text}
        </div>
    )
}
