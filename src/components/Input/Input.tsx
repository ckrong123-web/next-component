import React, { useState } from 'react';
import cn from 'classnames';

import { CloseIcon, SearchIcon } from '@/icon';

interface InputProps {
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    number?: boolean;
    isSearch?: boolean;
    hasDelete?: boolean;
    className?: string;
    descTxt?: string;
    [key: string]: any;
}

export default function Input({
    defaultValue,
    placeholder,
    disabled,
    readOnly,
    error,
    number,
    isSearch,
    hasDelete = true,
    className,
    descTxt,
    ...rest
}: InputProps) {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(defaultValue ? defaultValue : '');

    return (
        <div className={cn('input', className)}>
            <div
                className={cn('input__wrap', {
                    'input--disabled': disabled,
                    'input--readOnly': readOnly,
                    'input--focus': isFocus,
                    'input--error': error,
                    'input--number': number,
                    'input--search': isSearch,
                })}
            >
                <input
                    className="input__cont"
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
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onWheel={number ? (e) => e.currentTarget.blur() : undefined}
                    {...rest}
                />
                {value && hasDelete && !disabled && !readOnly && (
                    <button
                        className="input__btn"
                        onClick={() => {
                            setValue('');
                        }}
                    >
                        <CloseIcon />
                        <span className="blind">삭제</span>
                    </button>
                )}
                {isSearch && (
                    <button className="input__btn">
                        <SearchIcon />
                        <span className="blind">검색</span>
                    </button>
                )}
            </div>
            {descTxt && (
                <span className="input__errorMessage">
                    This is an error message
                </span>
            )}
            {error && (
                <span className="input__errorMessage">
                    This is an error message
                </span>
            )}
        </div>
    );
}
