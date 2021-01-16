import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default function SecondSection() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '133',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }

    const options = {
        legend: {
            display: false
        },
        // tooltips: {
        //     callbacks: {
        //         label: function(tooltipItem, data) {
        //             var label = data.datasets[tooltipItem.datasetIndex].label || '';

        //             if (label) {
        //                 label += ': ';
        //             }
        //             label += Math.round(tooltipItem.yLabel * 100) / 100;
        //             return label;
        //         }
        //     }
        // }
    }

    return (
        <Row>
            <Col xs={6}>
                <Card classes={{ root: "custom-box-shadow" }}>
                    <CardHeader title="Card Title" subheader="September 14, 2016" />
                    <CardContent>
                        <Pie data={data} height={400} options={options} />
                    </CardContent>
                </Card>
            </Col>
            <Col xs={6}>
                <Card classes={{ root: "custom-box-shadow" }}>
                    <CardHeader title="Card Title" subheader="September 14, 2016" />
                    <CardContent>
                        <Doughnut data={data} height={400} options={options} />
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}
