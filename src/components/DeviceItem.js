import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
    const history = useHistory()
    

    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>  </div>
                    <div>
                        
                    </div>                   
                </div>
                <div>{device.name}</div>
            </Card>
             
        </Col>
    )
}

export default DeviceItem