import React from 'react';
import { Radio } from '@/components';

export default function RadioGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Radio</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <div className="radioGroup">
                        <Radio name="ㅇㅇ" value="value">
                            value1
                        </Radio>
                        <Radio name="ㅇㅇ" value="value2">
                            value2
                        </Radio>
                        <Radio name="ㅇㅇ" value="value3" disable>
                            value2
                        </Radio>
                    </div>
                    <div className="guide__desc">
                        컴포넌트명 : Radio
                        <br /> Props : children | name | value | checked |
                        disalbe
                        <br />
                        Props disable 추가시 disabled 상태로 생성
                        <br />
                        <br />
                        그룹으로 묶어 사이간격을 주는 감쌈 태그명 .radioGroup
                    </div>
                </div>
            </div>
        </div>
    );
}
