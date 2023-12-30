// TODO PAN
import Gap from '@/components/common/Gap';
import Input from '@/components/common/Input';
import Title6Light from '@/components/common/Title/Title6Light';
import Title7Light from '@/components/common/Title/Title7Light';
import { Button } from '../Button';

// react-hook-form?

type FormProps = {
    // text: string,
};

export default function Form(props: FormProps) {
    const inputClassName =
        'text-[#0D544E] p-4 w-full outline-none  placeholder:text-[#0D544E] placeholder:opacity-50';
    return (
        <div className="button-box-shadow px-8 rounded-md bg-cover bg-[url('../assets/index/module-bg.png')]">
            <Gap size={50}></Gap>
            <Title6Light text="Contact Us"></Title6Light>
            <Title7Light text="Enquire for Price"></Title7Light>
            <Gap size={30}></Gap>
            <Input className={inputClassName} placeholder="First Name*"></Input>
            <Gap size={10}></Gap>
            <Input className={inputClassName} placeholder="Last Name*"></Input>
            <Gap size={10}></Gap>
            <Input className={inputClassName} placeholder="Phone"></Input>
            <Gap size={10}></Gap>
            <Input
                className={inputClassName}
                placeholder="Email Address*"
            ></Input>
            <Gap size={10}></Gap>
            <Input className={inputClassName} placeholder="Postcode"></Input>
            <Gap size={10}></Gap>
            <Input className={inputClassName} placeholder="Message*"></Input>
            <Gap size={10}></Gap>
            <Button className="w-full text-center blue-green-gradient">
                Submit Enquiry
            </Button>
            <Gap size={50}></Gap>
        </div>
    );
}
