import React from 'react';
import { Nodata } from '@/components';

export default function NodataGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Nodata</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <div
                            style={{
                                display: 'flex',
                                gap: '4rem',
                                flexWrap: 'wrap',
                            }}
                        >
                            <Nodata />
                            <Nodata subTxt="검색된 결과가 없습니다. 다시 검색해 주세요">
                                데이터가 없습니다.
                            </Nodata>
                        </div>
                    </div>
                    <div className="guide__desc">
                        컴포넌트명 : Nodata
                        <br />
                        Props: children | subTxt
                        <br />
                        Props children : 노데이터의 타이틀 부분을 변경할 수
                        있음, 넘기지 않을 시 기본으로 나오는 텍스트 &apos;결과가
                        없습니다.&apos;
                        <br />
                        Props subTxt 추가시 타이틀 아래로 서브 텍스트가
                        추가된다.
                    </div>
                </div>
            </div>
        </>
    );
}
