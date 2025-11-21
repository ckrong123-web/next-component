import React from 'react';
import Icon from '@img/icon/doubledownicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function DoubleDown({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-doubledown'} style={{ color }} />
        </IconBase>
    );
}
