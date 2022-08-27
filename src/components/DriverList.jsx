import { useState, useEffect, useLayoutEffect } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder';

import logo from '../assets/img/f1_logo.svg'
import DriverCard from './DriverCard'

import axios from 'axios'

function DriverList() {
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    async function getDrivers() {
      try {
        const response = await axios.get('https://ergast.com/api/f1/2022/drivers.json');
        const driversData = (response.data.MRData.DriverTable.Drivers);
        setDrivers(driversData);
        document.getElementById('drivers-list_loading').style.display = 'none';
      } catch (error) {
        console.error(error);
      }
    }
    getDrivers()
  }, [])
  
  return (
    <Row>
        <Col xs="12" className="text-center mb-2">
          <h1 class="f1-text-bold">2022 Season - Drivers</h1>
        </Col>

        <Col xs="12">
          <Placeholder id="drivers-list_loading" as="p" animation="glow">
            <Placeholder xs={12} className="rounded drivers-list_placeholder">
              <img src={logo} alt="loading" width={150} height="auto"></img>
            </Placeholder>
          </Placeholder>
        </Col>

        { drivers.map(driver => <DriverCard key={driver.driverId} {...driver}/>) }
    </Row>
  )
}

export default DriverList