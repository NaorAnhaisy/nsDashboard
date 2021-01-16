import React from 'react';
import { Line } from 'react-chartjs-2';
import FwUsageStatistics from '../FwUsageStatistics/FwUsageStatistics';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from 'react-bootstrap';
import BasicTable from '../BasicTable/BasicTable';

export default function SecondSection() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
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

    return (
        <Row className="mt-4">
            <Col xs={6}>
                <Card classes={{ root: "custom-box-shadow" }}>
                    <CardContent>
                        <BasicTable />
                    </CardContent>
                </Card>
                <Card className="mt-3" classes={{ root: "custom-box-shadow" }}>
                    <CardContent>
                        <Line data={data} height={200} />
                    </CardContent>
                </Card>
            </Col>
            <Col xs={6}>
                <FwUsageStatistics />
            </Col>
        </Row>
    );
}
