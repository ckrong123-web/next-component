import React from 'react';
import { Slider } from '@/components';

export default function SliderGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Slider</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    <Slider />
                    <div className="guide__desc">
                        컴포넌트명 : Slider Props: range | min | max
                        <br />
                        Props range 추가시 범위(최소 ~ 최대) 옵션
                        <br />
                        Props tooltip 추가시 툴팁 생성
                        <br />
                        Props min( number ) 추가시 최소값 설정
                        <br />
                        Props max ( number ) 추가시 최대값 설정
                        <br />
                    </div>
                </div>
                <span className="guide__boxName">range</span>
                <div className="guide__boxBody">
                    <Slider range />
                    <div className="guide__desc">Props: range</div>
                </div>
                <span className="guide__boxName">이외 props 넘김 테스트트</span>
                <div className="guide__boxBody">
                    <Slider
                        min={0}
                        max={30}
                        marks={{ 15: '중간' }}
                        step={5}
                        tooltip
                    />
                    <div className="guide__desc">
                        Props: marks
                        <br />
                        marks = &#123;[숫자, 숫자, ...]&#125;
                    </div>
                </div>
            </div>
        </div>
    );
}
