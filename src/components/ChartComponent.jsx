import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const ChartComponent = (props) => {
    const {
        data,
        colors: {
            backgroundColor = 'black',
            lineColor = '#2962FF',
            textColor = 'white',
            areaTopColor = 'rgba(0, 0, 150, 0.9)',
            areaBottomColor = 'rgba(0, 0, 0, 0.7)',
        } = {},
        size: {
            heightPercentage = 80
        } = {}
    } = props;
    console.log(lineColor);

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: window.innerHeight * (heightPercentage / 100),

            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div
            ref={chartContainerRef}
            style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        />
    );
};

export default ChartComponent;