import React from 'react';
import Icon from '@img/icon/searchicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function Shearch({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-shearch'} style={{ color }} />
        </IconBase>
    );
}
