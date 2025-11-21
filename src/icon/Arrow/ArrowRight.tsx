import React from 'react';
import Icon from '@img/icon/arrowrighticon.svg';
import { IconBase } from '@/icon';

interface IconProps {
    blindTxt?: string;
    color?: string;
    className?: string;
}

export default function ArrowRight({
    blindTxt,
    color = '#333',
    className,
}: IconProps) {
    return (
        <IconBase blindTxt={blindTxt} className={className}>
            <Icon className={'ico ico-arrowright'} style={{ color }} />
        </IconBase>
    );
}
