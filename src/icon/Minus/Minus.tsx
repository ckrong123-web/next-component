import React from 'react';
import Icon from '@img/icon/minusicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function Minus({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-minus'} style={{ color }} />
        </IconBase>
    );
}
