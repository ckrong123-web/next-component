'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartProps {
    type: 'line' | 'bar' | 'pie' | 'donut';
    series: ApexOptions['series'];
    options?: ApexOptions;
    width?: number | string;
    height?: number | string;
}

export default function Chart({
    type,
    series,
    options = {},
    width = '100%',
    height = 350,
}: ChartProps) {
    return (
        <div className="chart">
            <ReactApexChart
                type={type}
                series={series}
                options={options}
                width={width}
                height={height}
            />
        </div>
    );
}
