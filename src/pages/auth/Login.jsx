import { Card, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Card style={{ width: '22rem', paddingBlock: '6rem' }} className='justify-content-center mx-auto' id='login'>
            <Card.Body className='text-center' >
                <Card.Title className='mb-5'>Inicio de Sesion</Card.Title>
                <Form >
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            id='login__email'
                            className='mb-4'
                            placeholder='name@example.com'
                            required
                            {...register('email')}
                        />
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            id='login__password'
                            className='mb-5'
                            placeholder='Password'
                            required
                            {...register('password')}
                        />
                        <p>{errors.password?.message}</p>
                    </Form.Group>

                    <Button variant='success' type='submit' className='me-2' id='login__btn'required>Iniciar Sesion</Button>

                    <NavLink to='/login'><Button variant='primary' type='button' className='me-2' id='login__btn'>Registrarse</Button></NavLink>

                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;