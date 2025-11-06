import React, { useEffect, useRef } from 'react';
import { Children, useState } from 'react';
import TabItem from './TabItem';
import cn from 'classnames';

interface TabProps {
    roundType?: boolean;
    children: React.ReactNode;
    tabTitle: string[];
    actNum?: number;
    onClickEvt?: () => void;
}

export default function Tab({
    children,
    tabTitle,
    actNum = 0,
    roundType,
    onClickEvt,
}: TabProps) {
    const container = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<(HTMLButtonElement | null)[]>([]);
    const contRef = useRef<(HTMLLIElement | null)[]>([]);
    const [actNumber, setActNumber] = useState(actNum);

    const handleClickEvt = () => {
        onClickEvt && onClickEvt();
    };

    const actTab = (num: number) => {
        const prevNum = num - 1;
        btnRef.current.forEach((item) => {
            if (item) {
                item.classList.remove('on');
                item.classList.remove('prev');
            }
        });
        contRef.current.forEach((item) => {
            if (item) {
                item.classList.remove('on');
            }
        });
        btnRef.current[num] && btnRef.current[num].classList.add('on');
        contRef.current[num] && contRef.current[num].classList.add('on');
        btnRef.current[prevNum] &&
            btnRef.current[prevNum].classList.add('prev');
    };

    useEffect(() => {
        actTab(actNumber);
    }, [actNumber]);

    return (
        <>
            <div
                data-js-tab="tab"
                className={cn('tab', { 'tab--round': roundType })}
                ref={container}
            >
                <div className="tab__btnArea">
                    <ul className="tab__btnList">
                        {tabTitle.map((item, index) => (
                            <li key={'btn' + index} className="tab__btnItem">
                                <button
                                    className="tab__btn"
                                    onClick={() => {
                                        setActNumber(index);
                                        handleClickEvt();
                                    }}
                                    ref={(el) => {
                                        btnRef.current[index] = el;
                                    }}
                                >
                                    <span className="tab__btnTxt">{item}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tab__contArea">
                    <ul className="tab__contList">
                        {Children.map(children, (child, index) => (
                            <li
                                data-js-tab="cont"
                                className="tab__cont"
                                ref={(el) => {
                                    contRef.current[index] = el;
                                }}
                            >
                                {child}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

Tab.Item = TabItem;
