
import React, { useState, useRef, useEffect } from "react";
type InputProps = {
    inputValue?: string,
    placeholder?: string,
    className?: string,
};
export default function Input(props: InputProps) {
    const [inputValue, setinputValue] = useState(props.inputValue || '');
    return (
        <input className={`${props.className}`} type="text" value={inputValue} placeholder={props.placeholder ||''} onChange={e => {
            setinputValue(e.target.value);
        }} />
    )
}
