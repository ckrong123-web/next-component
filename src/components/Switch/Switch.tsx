import React, { useState } from 'react';
import cn from 'classnames';

interface SwitchProps {
    on?: boolean;
    onClickEvt?: () => void;
}

export default function Switch({ on = true, onClickEvt }: SwitchProps) {
    const [isOn, setIsOn] = useState(on);

    const handleChange = () => {
        setIsOn((prev) => !prev);
        onClickEvt && onClickEvt();
    };

    return (
        <div className={cn('switch')}>
            <label className={cn('switch__wrap', isOn && 'switch__wrap--on')}>
                <input
                    className="switch__input"
                    type="checkbox"
                    checked={isOn}
                    onChange={handleChange}
                />
                {/* <i className="switch__round" /> */}
            </label>
        </div>
    );
}
