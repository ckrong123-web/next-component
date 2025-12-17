import React from 'react';
import { Breadcrumb } from '@/components';

export default function BreadcrumbGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Breadcrumb</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Breadcrumb>
                            <Breadcrumb.Item>브레드크럼</Breadcrumb.Item>
                            <Breadcrumb.Item href="/breadcrumb">
                                기본 브레드크럼
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="guide__desc">
                        컴포넌트명 : Breadcrumb
                        <br /> Props: children
                        <br />
                        서브컴포넌트 : Breadcrumb.Item (Props : href, children)
                        <br />
                        Accordion.Item Props href, 추가시 링크형( a )으로 생성 /
                        기본은 span
                    </div>
                </div>
            </div>
        </>
    );
}
