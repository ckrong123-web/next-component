import React from 'react';
import Icon from '@img/icon/checkicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function Check({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-check'} style={{ color }} />
        </IconBase>
    );
}
