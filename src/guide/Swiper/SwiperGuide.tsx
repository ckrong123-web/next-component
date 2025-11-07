import React from 'react';
// import { Slider } from '@/components';

export default function SwiperGuide() {
    return (
        <div className="guide__box">
            <strong className="guide__head">Slide (swiper)</strong>
            <div className="guide__boxWrap">
                <span className="guide__boxName">기본</span>
                <div className="guide__boxBody">
                    {/* 
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
                        이외 props는 ...rest로 넘어감 */}
                </div>
            </div>
        </div>
    );
}
