import React from 'react';
import Icon from '@img/icon/copyicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function Copy({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-copy'} style={{ color }} />
        </IconBase>
    );
}
