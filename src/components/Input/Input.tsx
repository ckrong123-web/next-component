import React, { useState } from 'react';
import cn from 'classnames';

interface InputProps {
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    number?: boolean;
    className?: string;
    [key: string]: any;
}

export default function Input({
    defaultValue,
    placeholder,
    disabled,
    readOnly,
    error,
    number,
    className,
    ...rest
}: InputProps) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className={(cn('input'), className)}>
            <div
                className={cn('input__wrap', {
                    'input--disabled': disabled,
                    'input--readOnly': readOnly,
                    'input--focus': isFocus,
                    'input--error': error,
                    'input--number': number,
                })}
            >
                <input
                    className="input__cont"
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    onFocus={() => {
                        !readOnly && setIsFocus(true);
                    }}
                    onBlur={() => {
                        !readOnly && setIsFocus(false);
                    }}
                    type={number ? 'number' : 'text'}
                    {...rest}
                />
            </div>
            {error && (
                <span className="input__errorMessage">
                    This is an error message
                </span>
            )}
        </div>
    );
}
