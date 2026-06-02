import React from 'react';
import { Chart } from '@/components';

const chartColors = ['#0260eb', '#6972f3', '#ff6be4', '#00c9a7'];

const lineOptions = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
    colors: chartColors,
    xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        tooltip: { enabled: false },
        labels: { style: { fontSize: '13px' }, offsetY: 5 },
    },
    yaxis: { labels: { style: { fontSize: '13px' }, padding: 7 } },
    stroke: { curve: 'straight' as const, width: 2 },
};
const lineSeries = [
    { name: '방문자', data: [30, 40, 35, 50, 49, 60, 70] },
    { name: '신규', data: [10, 20, 15, 30, 25, 40, 45] },
];

const barOptions = {
    chart: { toolbar: { show: false } },
    colors: chartColors,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        tooltip: { enabled: false },
        labels: { style: { fontSize: '13px' }, offsetY: 5 },
    },
    yaxis: { labels: { style: { fontSize: '13px' }, padding: 7 } },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end' as const,
            columnWidth: '40%',
        },
    },
};
const barSeries = [
    { name: '매출', data: [44, 55, 57, 56, 61, 58, 63] },
    { name: '비용', data: [30, 40, 35, 45, 38, 42, 50] },
];

const pieSeries = [44, 55, 13, 43];
const pieOptions = {
    labels: ['직접 유입', '검색', 'SNS', '기타'],
    colors: chartColors,
    dataLabels: {
        style: { fontSize: '1.3rem' },
        dropShadow: { enabled: false },
    },
    plotOptions: { pie: { dataLabels: { offset: -20 } } },
};

const donutSeries = [44, 55, 13, 43];
const donutOptions = {
    labels: ['직접 유입', '검색', 'SNS', '기타'],
    colors: chartColors,
    dataLabels: {
        style: { fontSize: '1.3rem' },
        dropShadow: { enabled: false },
    },
    plotOptions: { pie: { dataLabels: { offset: -1 } } },
};

export default function ChartGuide() {
    return (
        <>
            <div className="guide__box">
                <strong className="guide__head">Chart - Line</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Chart
                            type="line"
                            series={lineSeries}
                            options={lineOptions}
                        />
                        <div className="guide__desc">
                            컴포넌트명 : Chart
                            <br />
                            Props: type | series | options | width | height
                            <br />
                            Props type( &apos;line&apos; ) 꺾은선 차트
                            <br />
                            Props series( ApexOptions[&apos;series&apos;] ) 차트
                            데이터
                            <br />
                            Props options( ApexOptions ) apexcharts 옵션 객체
                        </div>
                    </div>
                </div>
            </div>

            <div className="guide__box">
                <strong className="guide__head">Chart - Bar</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Chart
                            type="bar"
                            series={barSeries}
                            options={barOptions}
                        />
                        <div className="guide__desc">
                            Props type( &apos;bar&apos; ) 막대 차트
                        </div>
                    </div>
                </div>
            </div>

            <div className="guide__box">
                <strong className="guide__head">Chart - Pie</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Chart
                            type="pie"
                            series={pieSeries}
                            options={pieOptions}
                            height={300}
                        />
                        <div className="guide__desc">
                            Props type( &apos;pie&apos; ) 원형 차트
                            <br />
                            Pie / Donut 타입은 series에 숫자 배열을 넘김
                        </div>
                    </div>
                </div>
            </div>

            <div className="guide__box">
                <strong className="guide__head">Chart - Donut</strong>
                <div className="guide__boxWrap">
                    <span className="guide__boxName">기본</span>
                    <div className="guide__boxBody">
                        <Chart
                            type="donut"
                            series={donutSeries}
                            options={donutOptions}
                            height={300}
                        />
                        <div className="guide__desc">
                            Props type( &apos;donut&apos; ) 도넛 차트
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
