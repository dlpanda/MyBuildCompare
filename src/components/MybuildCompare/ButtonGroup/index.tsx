import React, { useState, useRef, useEffect } from 'react';
import Button from '@/components/common/Button/Button';
import BodyTextGrey from '@/components/common/Text/BodyTextGrey';
import Gap from '@/components/common/Gap';
type ButtonGroupProps = {
  title: string;
};
export default function ButtonGroup(props: ButtonGroupProps) {
  const buttonClass = 'mr-3 h-[2.5rem] leading-[2.5rem]';
  const [currentType, setcurrentType] = useState('Any');
  const handleChange = (type: string) => {
    if (type === currentType) {
      setcurrentType('');
    } else {
      setcurrentType(type);
    }
  };
  return (
    <div>
      <BodyTextGrey
        className="h-[1.375rem] leading-[1.375rem]"
        text="Bedrooms"
      ></BodyTextGrey>
      <Gap size={10}></Gap>
      <Button
        className={`${buttonClass} ${
          currentType === 'Any' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="Any"
        onClick={() => handleChange('Any')}
      ></Button>
      <Button
        className={`${buttonClass} ${
          currentType === '1' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="1"
        onClick={() => handleChange('1')}
      ></Button>
      <Button
        className={`${buttonClass} ${
          currentType === '2' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="2"
        onClick={() => handleChange('2')}
      ></Button>
      <Button
        className={`${buttonClass} ${
          currentType === '3' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="3"
        onClick={() => handleChange('3')}
      ></Button>
      <Button
        className={`${buttonClass} ${
          currentType === '4' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="4"
        onClick={() => handleChange('4')}
      ></Button>
      <Button
        className={`${buttonClass} ${
          currentType === '5+' ? 'bg-[#3D3D3D] text-white' : ''
        }`}
        text="5+"
        onClick={() => handleChange('5+')}
      ></Button>
    </div>
  );
}
