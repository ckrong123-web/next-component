import React, { useState } from 'react';
import cn from 'classnames';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { ko } from 'date-fns/locale';
registerLocale('ko', ko);

import 'react-datepicker/dist/react-datepicker.css';

interface DatepickerProps {
    defaultDate?: Date | null;
    dateFormat?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
    [key: string]: any;
}

export default function Datepicker({
    defaultDate = null,
    dateFormat = 'yyyy년 MM월 dd일',
    placeholder,
    disabled,
    readOnly,
    className,
    ...rest
}: DatepickerProps) {
    const [isFocus, setIsFocus] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(defaultDate);
    return (
        <div className={cn('input', 'datepicker', className)}>
            <div
                className={cn('input__wrap', 'datepicker__wrap', {
                    'input--disabled': disabled,
                    'input--readOnly': readOnly,
                    'input--focus': isFocus,
                })}
            >
                <DatePicker
                    locale="ko"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat={dateFormat}
                    placeholderText={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onFocus={() => {
                        !readOnly && setIsFocus(true);
                    }}
                    onBlur={() => {
                        !readOnly && setIsFocus(false);
                    }}
                    className={cn('datepicker__input', {
                        [`${className}__input`]: className,
                    })}
                    {...rest}
                />
            </div>
        </div>
    );
}
