import { Card, Button, Form } from 'react-bootstrap';

const CardCalendarComponent = () => {
    return (
        <Card className='cardCalendar'>
        <Card.Body>
            <Card.Title className='cardCalendar__title'>Crea un Evento</Card.Title>
            <Form 
            className='cardCalendar__form'>
                <Form.Group className='cardCalendar__form-group'>
                    <Form.Label>Titulo del evento:</Form.Label>
                    <Form.Control
                        type='text'
                        name='title-e'
                        className='cardCalendar__group-title'
                        placeholder='Ingresa un titulo de evento'
                    />
                </Form.Group>
                <Form.Group className='cardCalendar__form-group'>
                    <Form.Label>Titulo del evento:</Form.Label>
                    <Form.Control
                        type='text'
                        name='title-e'
                        className='cardCalendar__group-title'
                        placeholder='Ingresa un titulo de evento'
                    />
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    );
    
    
}

export default CardCalendarComponent;