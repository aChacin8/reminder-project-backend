import {Card, Button, Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './Login.scss'

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto ' id='card' >

            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form >
                    <Form.Group className='mb-3 mt-5' >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            {...register('email')}
                            required
                        />
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            placeholder='Password'
                            {...register('password')}
                            required
                        />
                        <p>{errors.password?.message}</p>
                    </Form.Group>

                    <Button variant='success' type='submit' className='me-2' required>Login</Button>

                    <NavLink to='/SignUp'><Button variant='primary' type='button' className='me-2'>Sign Up</Button></NavLink>

                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;