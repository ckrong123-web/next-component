import React from 'react';
import { Checkbox } from '@/components';

export default function CheckboxGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Checkbox</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '1.2rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Checkbox>감자</Checkbox>
                            <Checkbox>새우</Checkbox>
                            <Checkbox checked>고구마</Checkbox>
                            <Checkbox disalbed>양파</Checkbox>
                            <Checkbox disalbed checked>
                                명태
                            </Checkbox>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Checkbox
                            <br /> Props: id | className | disalbed | checked |
                            children | ...rest
                            <br />
                            Props id(string) 추가시 id 라벨과 체크박스에 들어감
                            <br />
                            Props disalbed 추가시 비활성화 상태
                            <br />
                            Props checked 추가시 체크된 상태로 시작
                            <br />
                            이외 props는 ...rest로 input에 넘어감
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
