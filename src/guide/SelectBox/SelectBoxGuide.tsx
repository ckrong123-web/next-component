import React from 'react';
import { SelectBox } from '@/components';

const options = [
    { value: 'red', label: '빨강' },
    { value: 'blue', label: '파랑' },
    { value: 'yellow', label: '노랑' },
    { value: 'green', label: '초록' },
    { value: 'purple', label: '보라' },
];

export default function SelectBoxGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Select</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <SelectBox options={options} />
                    <div className="guide__desc">
                        컴포넌트명 : Select
                        <br /> Props : options | isSearch | placeholder
                        <br />
                        Props options 객체 배열로 옵션 값들을 넘겨줌, 각 객체는
                        value(string)와 label(string) 값을 가져야함
                        <br />
                        isSearch 추가시 검색이 가능함
                        <br />
                        placeholder 추가시 plceholder 변경가능
                    </div>
                </div>
                <span className="guide__boxName">이외 props 넘김 테스트트</span>
                <div className="guide__boxBody">
                    <SelectBox options={options} isMulti />
                </div>
            </div>
        </div>
    );
}
