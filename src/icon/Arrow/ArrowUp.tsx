import React from 'react';
import Icon from '@img/icon/arrowupicon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function ArrowUp({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-arrowup'} style={{ color }} />
        </IconBase>
    );
}
