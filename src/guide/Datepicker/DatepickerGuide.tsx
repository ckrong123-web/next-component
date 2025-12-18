import React from 'react';
import { Datepicker } from '@/components';

export default function DatepickerGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Datepicker</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.45rem',
                            }}
                        >
                            <Datepicker />
                            <Datepicker placeholder="날짜를 선택하세요" />
                            <Datepicker disabled defaultDate={new Date()} />
                            <Datepicker readOnly defaultDate={new Date()} />
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Datepicker
                            <br />
                            Props : defaultDate | dateFormat | placeholder |
                            disabled | readOnly | error | className | ...rest
                            <br />
                            Props defaultDate(Date | null) 추가시 디폴트밸류
                            설정
                            <br />
                            Props dateFormat(string) 날짜 출력 형식을 변경, yyyy
                            =&gt; 연도 / MM =&gt; 월 / dd =&gt; 일
                            <br />
                            Props placeholder(string) 추가시 플레이스홀더 설정
                            <br />
                            Props : disabled ( 비활성화 )
                            <br />
                            Props : readOnly ( 읽기전용 )
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
