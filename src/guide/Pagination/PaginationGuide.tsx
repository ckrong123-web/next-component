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
                    </div>
                </div>
            </div>
        </>
    );
}
