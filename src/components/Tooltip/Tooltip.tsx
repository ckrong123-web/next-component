import React from 'react';
import cn from 'classnames';

interface TooltipProps {
    children: React.ReactNode;
    tooltipBottom?: boolean;
    isShow?: boolean;
}

export default function Tooltip({
    children,
    tooltipBottom,
    isShow = true,
}: TooltipProps) {
    return (
        <div
            className={cn('tooltip', {
                'tooltip--bottom': tooltipBottom,
                isShow: isShow,
            })}
        >
            <div className="tooltip__wrap">
                <span>{children}</span>
            </div>
        </div>
    );
}
