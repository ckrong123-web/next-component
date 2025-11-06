import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

interface SliderProps {
    range?: boolean; // range : 최소 범위 까지 지정할 수 있는 props
    tooltip?: boolean; // tooltip
    min?: number; // 최소단위
    max?: number; // 최대단위
    [key: string]: any;
}

export default function SliderComponents({
    range,
    tooltip,
    min = 0,
    max = 100,
    ...rest
}: SliderProps) {
    const handleCustom = (
        node: React.ReactElement,
        handleProps: SliderProps,
    ) => {
        return !tooltip ? (
            node
        ) : (
            <Tooltip
                overlay={handleProps.value}
                placement="bottom"
                overlayClassName="slider-tooltip"
            >
                {node}
            </Tooltip>
        );
    };

    console.log(tooltip);

    return (
        <div className="slider">
            <Slider
                range={range}
                min={min}
                max={max}
                handleRender={handleCustom}
                {...rest}
            />
        </div>
    );
}
