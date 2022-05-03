import {Badge, Button, Card} from "react-bootstrap";

function Event({event}) {
    const {title, description, date} = event;
    return <Card className={'rounded-3'}>
        <Card.Header>
            <h3 className={'d-flex justify-content-between'}>{title}<span>{date.toDateString()}</span></h3>
        </Card.Header>
        <Card.Body>
            <h5>{description}</h5>
        </Card.Body>
        <Card.Footer>
            <div className={'d-flex justify-content-between'}>

            </div>

        </Card.Footer>
    </Card>
}

export default Event;