import React from 'react'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import URL from './URL'
import Email from './Email'
import SMS from './SMS'
import Calendar from './Calendar'
import Wifi from './Wifi'
import Location from './Location'

function Home() {
    
  return (
    <Container className='mx-auto'>
      	<h1 className='my-4'>QR Generator</h1>
        <Tabs defaultActiveKey="url" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="url" title="URL">
                <URL />
            </Tab>
            <Tab eventKey="email" title="Email">
                <Email />
            </Tab>
            <Tab eventKey="sms" title="SMS">
               <SMS />
            </Tab>
            <Tab eventKey="calendar" title="Calendar">
               <Calendar />
            </Tab>
            <Tab eventKey="wifi" title="Wifi">
               <Wifi />
            </Tab>
            <Tab eventKey="location" title="GeoLocation">
               <Location />
            </Tab>
        </Tabs>
      </Container>
  );
}

export default Home