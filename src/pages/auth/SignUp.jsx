import Header from '@/components/Header'
import { Card, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '@/styles/Auth.scss'


const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
        <Header/>
        <Card style={{ width: '25rem' }} className='justify-content-center mx-auto mt-5' id='signup'>
            <Card.Body className='text-center' id='signup__body'>
                <Card.Title id='signup__tittle'>Crear Usuario</Card.Title>
                <Form >
                    <Form.Group className='mt-3' id='signup__form-div'>
                        <Form.Group className='mb-2' id='signup__form-name'>
                            <Form.Label className='m-3'>Nombre:</Form.Label>
                            <Form.Control
                                type='text'
                                id='signup__name-first'
                                className='mt-3'
                                name='first_name'
                                placeholder='Ingresa tu nombre'
                                required
                                {...register('first_name')}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' id='signup__form-name'>
                            <Form.Label className='m-3'>Apellido:</Form.Label>
                            <Form.Control
                                type='text'
                                id='signup__name-last'
                                className='m-3'
                                name='last_name'
                                placeholder='Ingresa tu apellido'
                                required
                                {...register('last_name')}
                            />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className='mb-3 d-flex'>
                        <Form.Label className='mx-4'>Genero:</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3" required>
                                <Form.Check
                                    inline
                                    label="M"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    {...register('gender')}
                                />
                                <Form.Check
                                    inline
                                    label="F"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    {...register('gender')}
                                />
                                <Form.Check
                                    inline
                                    label="O"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    {...register('gender')}
                                />
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group className='mt-3' id='signup__form-div'>
                        <Form.Group className='mb-3' id='signup__form-location'>
                            <Form.Label className='m-3'>Direccion:</Form.Label>
                            <Form.Control
                                type='text'
                                id='signup__location'
                                className='mt-3'
                                name='location'
                                placeholder='Ingresa tu direccion'
                                required
                                {...register('location')}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' id='signup__form-phone'>
                            <Form.Label className='m-3'>Telefono:</Form.Label>
                            <Form.Control
                                type='text'
                                id='signup__phone'
                                className='m-3'
                                name='phone_number'
                                placeholder='Ingresa tu numero telefonico'
                                {...register('phone_number')}
                            />
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            className='m-3'
                            id='signup__email'
                            placeholder='nombre@ejemplo.com'
                            required
                            {...register('email')}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            id='signup__password'
                            placeholder='Ingresa una Contraseña'
                            required
                            {...register('password')}
                        />
                    </Form.Group>

                    <Button variant='success' type='submit' className='btn btn-outline-primary mt-3' id='signup__btn'>Registrarse </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

export default SingUp; 