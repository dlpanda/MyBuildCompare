import { useCallback, useState } from 'react';
import { BodyText } from '../Text';

type CheckBoxProps = {
  isChecked?: boolean;
  disabled?: boolean;
  text: string;
};

export default function CheckBox(props: CheckBoxProps) {
  const [checked, setChecked] = useState(props.isChecked);

  // use callback
  const handleChange = useCallback(() => {
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
        disabled={props.disabled}
        onChange={handleChange}
      />
      <label htmlFor="coding">
        <BodyText
          className="inline-block ml-2 h-[30px] leading-[30px]"
          text={props.text}
        ></BodyText>
      </label>
    </div>
  );
}
