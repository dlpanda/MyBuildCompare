
import React, { useState, useRef, useEffect } from "react";
import BodyTextGrey from '@/components/common/Text/BodyTextGrey';
type CheckBoxProps = {
    isChecked?: boolean,
    disabled?:boolean,
    text: string,
};
export default function CheckBox(props: CheckBoxProps) {
    const [checked, setChecked] = useState(props.isChecked);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <div>
            <input className="checkbox" type="checkbox" id="coding" name="interest" value="true" checked={checked} disabled={props.disabled} onChange={handleChange} />
            <label htmlFor="coding"><BodyTextGrey className="inline-block ml-2 h-[30px] leading-[30px]" text={props.text}></BodyTextGrey></label>
        </div>
    )
}
