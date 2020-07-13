import React, { useEffect, useState } from 'react';
import { getDailyData } from '../../Api/GetData';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    let [dailyData, setDailyData] = useState({});

    useEffect(() => {
        async function getData() {
            setDailyData(await getDailyData());
        }

        getData();
    }, []);

    const lineChart = (
        dailyData[0]
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailyData.map((data) => data.deaths),
                        label: 'deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0 ,0, 0.5)',
                        fill: true,
                    },
                    {
                        data: dailyData.map((data) => data.recovered),
                        label: 'recovered',
                        borderColor: 'green',
                        fill: true
                    }
                    ],
                }} />) : null
    )

    const barChart = (
        confirmed ?
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country ? country: 'Global'}` },
                }}
            /> : null
    )
    return (
        <div>
            {!country ? lineChart: null}
            {barChart}
        </div>
    );
}
export default Chart;
