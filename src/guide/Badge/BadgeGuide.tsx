import React from 'react';
import { Badge } from '@/components';

export default function BadgeGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">뱃지 컴포넌트</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Badge>뱃지 default</Badge>
                            <Badge color="black">뱃지 black</Badge>
                            <Badge color="red">뱃지 red</Badge>
                            <Badge color="blue">뱃지 blue</Badge>
                            <Badge color="purple">뱃지 purple</Badge>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Badge Props: color
                            <span>
                                ('default','black','red','blue','purple')
                            </span>{' '}
                            | size
                            <span>('big')</span> href | isBtn | noBorder |
                            className | children
                        </div>
                    </div>
                    <span className="guide__boxName">big</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Badge size="big">big 뱃지 default</Badge>
                            <Badge color="black" size="big">
                                big 뱃지 black
                            </Badge>
                            <Badge color="red" size="big">
                                big 뱃지 red
                            </Badge>
                            <Badge color="blue" size="big">
                                big 뱃지 blue
                            </Badge>
                            <Badge color="purple" size="big">
                                big 뱃지 purple
                            </Badge>
                        </div>
                        <div className="guide__desc">Props size : big </div>
                    </div>
                    <span className="guide__boxName">no border</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Badge noBorder>뱃지 default</Badge>
                            <Badge color="black" noBorder>
                                뱃지 black
                            </Badge>
                            <Badge color="red" noBorder>
                                뱃지 red
                            </Badge>
                            <Badge color="blue" noBorder>
                                뱃지 blue
                            </Badge>
                            <Badge color="purple" noBorder>
                                뱃지 purple
                            </Badge>
                        </div>
                        <div className="guide__desc">Props noBorder</div>
                    </div>
                    <span className="guide__boxName">링크 / 버튼형</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '0.7rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Badge href="#">a 태그</Badge>
                            <Badge href="#" color="black">
                                a 태그
                            </Badge>
                            <Badge color="red" isBtn>
                                뱃지 red
                            </Badge>
                            <Badge color="blue" isBtn>
                                뱃지 blue
                            </Badge>
                            <Badge color="purple" isBtn>
                                뱃지 purple
                            </Badge>
                        </div>
                        <div className="guide__desc">
                            Props href( string ) 추가시 링크형( a )으로 생성
                            <br />
                            Props isBtn 추가시 버튼형으로 생성
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
