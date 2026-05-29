import React, { useId, useState, useRef, useEffect } from 'react';

interface SegmentProps {
    items: string[];
    actNum?: number;
    onClickEvt?: () => void;
}

export default function Segment({
    items,
    actNum = 0,
    onClickEvt,
}: SegmentProps) {
    const groupName = useId();
    const [actIndex, setActIndex] = useState(actNum);
    const itemRefs = useRef<(HTMLLabelElement | null)[]>([]);
    const [barStyle, setBarStyle] = useState({ width: 0, left: 0 });

    useEffect(() => {
        const el = itemRefs.current[actIndex];
        if (!el) return;
        setBarStyle({ width: el.offsetWidth, left: el.offsetLeft });
    }, [actIndex]);

    const handleChange = (index: number) => {
        setActIndex(index);
        onClickEvt && onClickEvt();
    };

    return (
        <div className="segment">
            <div className="segment__wrap">
                <span
                    className="segment__bar"
                    style={{
                        width: barStyle.width,
                        transform: `translateX(${barStyle.left}px)`,
                    }}
                />
                {items.map((item, index) => (
                    <label
                        key={index}
                        className={`segment__item${actIndex === index ? ' segment__item--act' : ''}`}
                        ref={(el) => {
                            itemRefs.current[index] = el;
                        }}
                    >
                        <input
                            type="radio"
                            className="segment__input"
                            name={groupName}
                            value={item}
                            checked={actIndex === index}
                            onChange={() => handleChange(index)}
                        />
                        <span className="segment__txt">{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
