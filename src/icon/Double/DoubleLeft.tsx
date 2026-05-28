import React from 'react';
import Icon from '@img/icon/doublelefticon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function DoubleLeft({
    blindTxt,
    color = 'inherit',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-doubleleft'} style={{ color }} />
        </IconBase>
    );
}
