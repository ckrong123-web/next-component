import React, { useState } from 'react';
import cn from 'classnames';

interface CheckboxProps {
    id?: string;
    className?: string;
    disalbed?: boolean;
    checked?: boolean;
    children?: React.ReactNode;
    [key: string]: any;
}

export default function Checkbox({
    id,
    className,
    disalbed,
    checked = false,
    children,
    ...rest
}: CheckboxProps) {
    const [check, setCheck] = useState(checked);

    return (
        <div className={cn('checkbox', className)}>
            <label htmlFor={id} className="checkbox__wrap">
                <input
                    type="checkbox"
                    id={id}
                    disabled={disalbed}
                    className="checkbox__input"
                    checked={check}
                    onChange={(e) => {
                        setCheck(e.target.checked);
                    }}
                    {...rest}
                />
                {children}
            </label>
        </div>
    );
}
