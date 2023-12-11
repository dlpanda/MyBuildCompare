
type GapProps = {
    width: String,
    height: String;
};
export default function Gap(props: GapProps) {
    const {width = '20px',height = '100px'} = props
    return (
        <div style={{width:width+'px',height:height+'px'}}></div>
    )
}
    