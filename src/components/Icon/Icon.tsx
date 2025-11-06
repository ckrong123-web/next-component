import React from 'react';
import cn from 'classnames';

interface IconProps {
    blindTxt?: string;
    icoName: string;
    // size?: string;
    // height?: string;
}

export default function Icon({ blindTxt, icoName }: IconProps) {
    return (
        <span className="icon">
            <span className="icon__wrap">
                <i className={icoName}></i>
                {blindTxt && <span className="blind">{blindTxt}</span>}
            </span>
        </span>
    );
}
