import {Card, Button, Form, NavLink} from 'react-bootstrap';
import {useForm} from 'react-hook-form'


const Home = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <>
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5' > 
                
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
                        <Button variant='success' type='submit' className='me-2'>
                            <NavLink to='/SignUp'>Sign Up</NavLink>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

                                        <NavLink to='/SignUp'>Sign Up</NavLink>
        </>
        
            
    );
}

export default Home; 