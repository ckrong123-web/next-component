import React from 'react';
import { Pagination } from '@/components';

export default function PaginationGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Pagination</strong>
                <div className="guide__boxWrap">
                    <div className="guide__boxBody">
                        <Pagination />
                        <div className="guide__desc">
                            컴포넌트명 : Pagination
                            <br />
                            Props : type
                            <span>( &apos;btn&apos; , &apos;url&apos; )</span> |
                            startNum | max | length
                            <br />
                            Props type &apos;btn&apos;(기본값) 추가시 버튼형으로
                            생성, &apos;url&apos; 추가시 링크형( a )으로 생성
                            <br />
                            Props startNum( number ) 시작 페이지 번호 설정 (
                            기본값 : 1 )
                            <br />
                            Props max( number ) 전체 페이지 수 설정 ( 기본값 :
                            15 )
                            <br />
                            Props length( number ) 한 번에 표시할 페이지 번호
                            개수 설정 ( 기본값 : 7 )
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
