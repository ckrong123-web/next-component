import React from 'react';
import { FloatBtn } from '@/components';
import { AddIcon, CopyIcon, DeleteIcon, HomeIcon } from '@/icon';

export default function FloatBtnGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">FloatBtn</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'block',
                                position: 'relative',
                                width: '100%',
                                height: '30vh',
                                minHeight: '25rem',
                            }}
                        >
                            {/* inline-style 은 가이드용 */}
                            <FloatBtn style={{ position: 'absolute' }}>
                                <FloatBtn.Item icon={<AddIcon />}>
                                    추가
                                </FloatBtn.Item>
                                <FloatBtn.Item icon={<CopyIcon />}>
                                    복사
                                </FloatBtn.Item>
                                <FloatBtn.Item icon={<DeleteIcon />}>
                                    삭제
                                </FloatBtn.Item>
                                <FloatBtn.Item icon={<HomeIcon />} href="/">
                                    홈으로
                                </FloatBtn.Item>
                            </FloatBtn>
                        </div>
                        <div className="guide__desc">
                            컴포넌트명 : FloatBtn
                            <br />
                            Props : children | ...rest
                            <br />
                            서브컴포넌트 : FloatBtn.Item (Props : href | icon |
                            children)
                            <br />
                            FloatBtn.Item Props href ( string ) 추가시 링크형( a
                            )으로 생성
                            <br />
                            FloatBtn.Item Props icon 필수로 추가해야 하는 값,
                            버튼 안에 넣을 아이콘
                            <br />
                            FloatBtn.Item Props children 필수로 추가해야 하는
                            값, 버튼의 텍스트 영역이다
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
