
type GapHeight40Props = {
    width?: string,
    height?: string;
};
export default function GapHeight40(props: GapHeight40Props) {
    const {width = '100%',height = '40px'} = props
    return (
        <div style={{width:width, height:height}}></div>
    )
}
    