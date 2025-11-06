import React from 'react';
interface RadioProps {
    name: string;
    value: string;
    checked?: boolean;
    disable?: boolean;
    children?: string;
}

export default function Radio({
    name,
    value,
    checked,
    disable,
    children,
}: RadioProps) {
    return (
        <div className="radio">
            <label className="radio__wrap">
                <input
                    type="radio"
                    className="radio__input"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disable}
                />
                <span className="radio__txt">{children}</span>
            </label>
        </div>
    );
}
