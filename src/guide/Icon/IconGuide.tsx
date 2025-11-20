import React from 'react';
import { Icon } from '@/components';

const iconList = [
    { name: 'ico-add', blind: 'add icon' },
    { name: 'ico-arrowDown' },
    { name: 'ico-arrowDown--333' },
    { name: 'ico-arrowLeft' },
    { name: 'ico-arrowLeft--blue' },
    { name: 'ico-arrowRight' },
    { name: 'ico-arrowRight--blue' },
    { name: 'ico-arrowUp' },
    { name: 'ico-arrowUp--333' },
    { name: 'ico-close' },
    { name: 'ico-close--333' },
    { name: 'ico-copy' },
    { name: 'ico-delete' },
    { name: 'ico-doubleArrowDown' },
    { name: 'ico-doubleArrowUp' },
    { name: 'ico-link' },
    { name: 'ico-link--333' },
    { name: 'ico-link--666' },
    { name: 'ico-link--999' },
    { name: 'ico-link--999' },
    { name: 'ico-minus' },
    { name: 'ico-minus--333' },
    { name: 'ico-plus' },
    { name: 'ico-plus--333' },
    { name: 'ico-remove' },
    { name: 'ico-reset' },
    { name: 'ico-reset--333' },
    { name: 'ico-save' },
    { name: 'ico-upload' },
    { name: 'ico-upload--666' },
];

export default function InputGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Icon</strong>
                <div className="guide__boxWrap ">
                    <div className="guide__boxBody">
                        <div className="guide__boxWrap guide__boxWrap--solid">
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '1.2rem',
                                }}
                            >
                                {iconList.map((item, num) => {
                                    return (
                                        <div
                                            style={{
                                                display: 'inline-flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '4rem',
                                                    height: '4rem',
                                                }}
                                            >
                                                <Icon
                                                    blindTxt={
                                                        item.blind
                                                            ? item.blind
                                                            : undefined
                                                    }
                                                    icoName={item.name}
                                                />
                                            </div>
                                            <span className="guide-txt--12">
                                                {item.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Icon <br />
                            Props : icoName | blindTxt
                            <br />
                            Props icoName(string) 필수로 넘겨야 하는 값,
                            class값으로 넘어가서 background로 아이콘 나옴
                            <br />
                            Props blindTxt(string) 추가시 blind 텍스트 추가됨
                            <br />
                            <br />
                            icon 추가시 base\_icon.scss 에서 function 추가,
                            compontents\_icon.scss 에서 class 에 background 로
                            불러냄
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
