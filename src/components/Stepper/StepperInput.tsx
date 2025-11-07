import React from 'react';
import { useStepper } from './Stepper';
import { Input } from '@/components';

interface StepperInputProps {
    placeholder?: string;
    [key: string]: any;
}

export default function StepperInput({
    placeholder = '000',
    ...rest
}: StepperInputProps) {
    const { value, setValue, disable } = useStepper();

    const setValueEvt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className="stepper__input">
            <Input
                className="stepper-input"
                placeholder={placeholder}
                number
                onChange={setValueEvt}
                value={value}
                disabled={disable}
                {...rest}
            />
        </div>
    );
}
