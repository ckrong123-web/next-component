import React from 'react';

import NodataImg from '@img/nodata.svg';
import img01 from '@img/slide01.jpg';
interface NodataProps {
    children?: React.ReactNode;
    subTxt?: string;
}

export default function Nodata({
    children = '결과가 없습니다.',
    subTxt,
}: NodataProps) {
    return (
        <div className="nodata">
            <div className="nodata__wrap">
                <div className="nodata__img">
                    <NodataImg />
                </div>
                <div className="nodata__txt">
                    <span className="nodata__tit">{children}</span>
                    {subTxt && <span className="nodata__sub">{subTxt}</span>}
                </div>
            </div>
        </div>
    );
}
