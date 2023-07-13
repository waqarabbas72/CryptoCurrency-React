import React from 'react'
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimeStamp = [];


    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    console.log(coinPrice, coinTimeStamp);
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            scales: {
                yAxes: [
                    {
                        tricks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }
    return(
        <>
            <Row className="chart-header">
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className='price-change'>{coinHistory?.data?.change} %</Title>
                    <Title level={5} className='current-change'>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
};

export default LineChart;
