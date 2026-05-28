import React from 'react';
import Icon from '@img/icon/doublerighticon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function DoubleRight({
    blindTxt,
    color = 'inherit',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-doubleRight'} style={{ color }} />
        </IconBase>
    );
}
