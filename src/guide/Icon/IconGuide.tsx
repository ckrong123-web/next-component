import React from 'react';
import {
    AddIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CloseIcon,
    CopyIcon,
    DeleteIcon,
    DoubleDownIcon,
    DoubleUpIcon,
    LinkIcon,
    MinusIcon,
    PlusIcon,
    RemoveIcon,
    ResetIcon,
    SaveIcon,
    UploadIcon,
} from '@/icon';

const iconList = [
    { name: 'AddIcon', icon: <AddIcon blindTxt="add" /> },
    { name: 'ArrowDownIcon', icon: <ArrowDownIcon /> },
    { name: 'ArrowLeftIcon', icon: <ArrowLeftIcon /> },
    { name: 'ArrowRightIcon', icon: <ArrowRightIcon /> },
    { name: 'ArrowUpIcon', icon: <ArrowUpIcon /> },
    { name: 'CloseIcon', icon: <CloseIcon /> },
    { name: 'CopyIcon', icon: <CopyIcon /> },
    { name: 'DeleteIcon', icon: <DeleteIcon /> },
    { name: 'DoubleDownIcon', icon: <DoubleDownIcon /> },
    { name: 'DoubleUpIcon', icon: <DoubleUpIcon /> },
    { name: 'LinkIcon', icon: <LinkIcon /> },
    { name: 'MinusIcon', icon: <MinusIcon /> },
    { name: 'PlusIcon', icon: <PlusIcon /> },
    { name: 'RemoveIcon', icon: <RemoveIcon /> },
    { name: 'ResetIcon', icon: <ResetIcon /> },
    { name: 'SaveIcon', icon: <SaveIcon /> },
    { name: 'Upload', icon: <UploadIcon /> },
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
                                            key={num}
                                        >
                                            <div
                                                style={{
                                                    width: '4rem',
                                                    height: '4rem',
                                                }}
                                            >
                                                {item.icon}
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
