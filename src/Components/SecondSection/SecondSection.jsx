import React from 'react';
import FwUsageStatistics from '../FwUsageStatistics/FwUsageStatistics';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from 'react-bootstrap';
import CluserStatusTable from '../CluserStatusTable/CluserStatusTable';
import FwConnectionsChart from '../FwConnectionsChart/FwConnectionsChart';
import TopProcessesTable from '../TopProcessesTable/TopProcessesTable';

export default function SecondSection() {
    return (
        <Row className="mt-4">
            <Col xs={6}>
                <Card classes={{ root: "custom-box-shadow" }}>
                    <CardContent>
                        <CluserStatusTable />
                    </CardContent>
                </Card>
                <FwConnectionsChart />
            </Col>
            <Col xs={6}>
                <FwUsageStatistics />
                <Card classes={{ root: "custom-box-shadow" }} m={5} p={5}>
                    <CardContent>
                        <TopProcessesTable />
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}
