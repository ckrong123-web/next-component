import React from 'react';
import { Input } from '@/components';

export default function InputGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">INPUT</strong>
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
                            <Input />
                            <Input defaultValue="TXT" />
                            <Input placeholder="TXT" />
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Input <br />
                            Props : defaultValue | placeholder | disabled |
                            readOnly <br />
                            Props defaultValue(string) 추가시 디폴트밸류 설정{' '}
                            <br />
                            Props placeholder(string) 추가시 플레이스홀더 설정
                        </div>
                    </div>
                    <span className="guide__boxName">
                        비활성화 & 읽기전용(disable / readOnly)
                    </span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.45rem',
                            }}
                        >
                            <Input disabled defaultValue="TXT" />
                            <Input readOnly placeholder="TXT" />
                        </div>
                        <div className="guide__desc">
                            Props : disabled ( 비활성화 )<br />
                            Props : readOnly ( 읽기전용 )
                        </div>
                    </div>
                    <span className="guide__boxName">에러 (error)</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.45rem',
                            }}
                        >
                            <Input error defaultValue="TXT" />
                        </div>
                        <div className="guide__desc">Props : error</div>
                    </div>
                    <span className="guide__boxName">숫자형 (number)</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.45rem',
                            }}
                        >
                            <Input number />
                        </div>
                        <div className="guide__desc">Props : number</div>
                    </div>
                </div>
            </div>
        </>
    );
}
