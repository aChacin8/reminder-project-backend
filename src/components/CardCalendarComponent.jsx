import { Card, Button, Form } from 'react-bootstrap';

const CardCalendarComponent = () => {
    return (
        <Card className='cardCalendar' style={{width: '20rem', margin: '2rem'}}>
        <Card.Body>
            <Card.Title className='cardCalendar__title'>Crea un Evento</Card.Title>
            <Form 
            className='cardCalendar__form'>
                <Form.Group className='cardCalendar__form-group'>
                    <Form.Label>Titulo:</Form.Label>
                    <Form.Control
                        type='text'
                        name='title-e'
                        className='cardCalendar__group-title'
                        placeholder='Ingresa un titulo del evento'
                    />
                </Form.Group>
                <Form.Group className='cardCalendar__form-group'>
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control
                        type='text'
                        name='descr-e'
                        className='cardCalendar__group-descr'
                        placeholder='Ingresa un descripcion del evento'
                    />
                </Form.Group>
                <Form.Group className='d-flex m-3'>
                    <Form.Group className='cardCalendar__form-group'>
                        <Form.Label>Fecha de Inicio:</Form.Label>
                        <Form.Control
                            type='text'
                            name='firstDate-e'
                            className='cardCalendar__group-firstDate'
                            placeholder='Ingresa un descripcion del evento'
                        />
                    </Form.Group>
                    <Form.Group className='cardCalendar__form-group'>
                        <Form.Label>Fecha Finalización:</Form.Label>
                        <Form.Control
                            type='text'
                            name='lastDate-e'
                            className='cardCalendar__group-lastDate'
                            placeholder='Ingresa un descripcion del evento'
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type='color'
                        name='color-e'
                        className='cardCalendar__group-color'
                        placeholder='Ingresa un color para el evento'
                    />
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    );
    
    
}

export default CardCalendarComponent;