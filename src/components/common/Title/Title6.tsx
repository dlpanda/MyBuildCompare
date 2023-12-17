type TitleProps = {
    text: string,
    className?:string,
};
export default function Title(props: TitleProps) {
    return (
        <div className={`title-6 ${props.className}`}>
            {props.text}
        </div>
    )
}