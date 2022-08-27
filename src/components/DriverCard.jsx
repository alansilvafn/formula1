import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function DriverCard(props) {
    const photoUrl = './assets/img/drivers/' + props.code.toLowerCase() + '.webp'

    return (
        <Col xs="12" sm="6" md="4" lg="3">
            <Card style={{ width: "100%"}} className="mb-3">
                <div className="driver-cover">
                    <Card.Img className="driver-cover_img" src={photoUrl} alt={props.givenName+' '+props.familyName} />
                </div>
                <Card.Body>
                    <Badge bg="secondary" className="f1-text-bold">{props.code}</Badge>
                    <Card.Title>{props.givenName} {props.familyName}</Card.Title>
                    <ListGroup className="mb-2">
                        <ListGroup.Item><b>Nationality:</b> {props.nationality}</ListGroup.Item>
                        <ListGroup.Item><b>Car Number:</b> {props.permanentNumber}</ListGroup.Item>
                    </ListGroup>
                    <Button href={props.url} variant="dark" target="_blank">More info</Button>                    
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DriverCard
  