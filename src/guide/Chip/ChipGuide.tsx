import React from 'react';
import { Chip } from '@/components';

import profileImg from '@img/dummy_profile.jpg';

import Icon from '@img/icon/pinicon.svg';

export default function ChipGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Chip</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.4rem',
                            }}
                        >
                            <Chip>바나나</Chip>
                            <Chip icon={<Icon />}>딸기</Chip>
                            <Chip icon={<Icon />} isProfile>
                                토마토
                            </Chip>
                            <Chip isProfile>코코넛</Chip>
                            <Chip isProfile img={profileImg}>
                                호두
                            </Chip>
                            <Chip noBtn>포도</Chip>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : Chip <br />
                            Props : isProfile | img | icon | noBtn | children |
                            ...rest <br />
                            Props isProfile 추가시 이미지 영역 추가
                            <br />
                            Props img 이미지 영역에 이미지 추가, 이미지를 넣지
                            않으면 기본이미지 노출
                            <br />
                            Props icon 추가시 아이콘 추가
                            <br />
                            Props noBtn 추가시 닫기 버튼 제거
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
