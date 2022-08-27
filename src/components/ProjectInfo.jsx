import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'

function ProjectInfo() {
    return (
        <Row>
          <Col>
            <Alert variant="dark" className="mb-5">
                <h2 className="f1-text-bold">Project info</h2>
                <p>This is a example site made with objective of practice ReactJS skills</p>
                <h3 className="f1-text-bold">What I did here?</h3>
                <ListGroup className="mb-2">
                    <ListGroup.Item>I start the project using the <b>Vite</b> package for <b>React</b></ListGroup.Item>
                    <ListGroup.Item>I did create the <b>components</b>: Header, ProjectInfo, DriversList, DriverCard and Footer</ListGroup.Item>
                    <ListGroup.Item>Next, i did the <b>API</b> request to get the drivers info using <b>Axios</b> library in a async function</ListGroup.Item>
                    <ListGroup.Item>For last, I present a list of drivers using <b>React-Bootstrap</b> library</ListGroup.Item>
                </ListGroup>
            </Alert>
          </Col>
        </Row>
    )
}

export default ProjectInfo