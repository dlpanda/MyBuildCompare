// TODO 选中事件放到父级
import { PropsWithChildren, useCallback, useState } from 'react';
import Text from '../Text';

type CheckBoxProps = PropsWithChildren<{
    isChecked?: boolean;
    disabled?: boolean;
}>;

export default function CheckBox({
    disabled,
    isChecked,
    children,
}: CheckBoxProps) {
    const [checked, setChecked] = useState(isChecked);
    // use callback
    const onChange = useCallback(() => {
        setChecked(!checked);
    }, []);
    return (
        <div>
            <input
                className="checkbox"
                type="checkbox"
                id="coding"
                name="interest"
                value="true"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            <label htmlFor="coding">
                <Text className="inline-block ml-2 h-[30px] leading-[30px]">
                    {children}
                </Text>
            </label>
        </div>
    );
}
