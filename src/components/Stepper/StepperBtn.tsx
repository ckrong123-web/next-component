import React, { useState, useEffect } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@/icon';
import { useStepper } from './Stepper';
import cn from 'classnames';

interface StepperBtnProps {
    count: 'down' | 'up';
    num?: number;
}

export default function StepperBtn({ count, num = 1 }: StepperBtnProps) {
    const { value, setValue, disable, max } = useStepper();
    const [isDisable, setIsDisalbe] = useState(disable);

    const handleClickBtn = () => {
        changeValue();
    };

    const changeValue = () => {
        if (value.length === 0 && count === 'up') {
            setValue('1');
        } else if (value.length === 0 && count === 'down') {
            setValue('0');
        } else if (value) {
            count === 'up'
                ? setValue(String(Number(value) + num))
                : setValue(String(Number(value) - num));
        }
    };

    const thisIcon = () => {
        if (count === 'down') {
            return <ArrowDownIcon />;
        } else if (count === 'up') {
            return <ArrowUpIcon />;
        }
    };

    useEffect(() => {
        if (value === '0' && count === 'down') {
            // console.log('0이다');
            setIsDisalbe(true);
        } else if (max && Number(value) === max && count === 'up') {
            // console.log('max다');
            setIsDisalbe(true);
        } else {
            setIsDisalbe(false);
        }
    }, [value, count]);

    useEffect(() => {
        disable && setIsDisalbe(true);
    }, [disable]);

    return (
        <button
            className={cn('stepper-btn', {
                'stepper-btn--disabled': isDisable,
            })}
            onClick={handleClickBtn}
            disabled={isDisable}
        >
            <div className="stepper-btn__icon">{thisIcon()}</div>
            <span className="blind">
                {count === 'down' ? '숫자 1 감소' : '숫자 1 증가'}
            </span>
        </button>
    );
}
