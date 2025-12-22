import React, { useState, useRef, useEffect } from 'react';
import { Tooltip } from '@/components';
import cn from 'classnames';

interface IconButtonProps {
    tableHead?: boolean;
    children: React.ReactNode;
    tooltip?: string;
    tooltipBottom?: boolean;
    tooltipLocationAuto?: boolean;
    onClickEvt?: () => void;
}

export default function IconButton({
    children,
    tooltipBottom,
    tooltipLocationAuto,
    tooltip,
    onClickEvt,
}: IconButtonProps) {
    const [tooltipShow, setTooltipShow] = useState(false);
    const [autoTooltipBottom, setAutoTooltipBottom] = useState(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!tooltipLocationAuto) return;
        const settingTooltip = () => {
            if (!btnRef.current) return;
            const btnRect = btnRef.current.getBoundingClientRect();
            setAutoTooltipBottom(btnRect.top < 200 ? true : false);
        };

        window.addEventListener('scroll', settingTooltip);
    }, [autoTooltipBottom, tooltipLocationAuto]);

    return (
        <button
            ref={btnRef}
            className="btnIco"
            onClick={() => {
                onClickEvt && onClickEvt;
            }}
            onMouseEnter={() => {
                tooltip && setTooltipShow(true);
            }}
            onMouseLeave={() => {
                tooltip && setTooltipShow(false);
            }}
        >
            <div className={cn('btnIco__wrap')}>
                <span className="btnIco__icon">{children}</span>
                {tooltip && (
                    <div
                        className={cn('btnIco__tooltip', {
                            tooltipBottom: tooltipBottom || autoTooltipBottom,
                        })}
                    >
                        <Tooltip
                            isShow={tooltipShow}
                            tooltipBottom={tooltipBottom || autoTooltipBottom}
                        >
                            {tooltip}
                        </Tooltip>
                    </div>
                )}
            </div>
        </button>
    );
}
