import {Routes, Route} from 'react-router-dom';
import SignUp from '@/pages/auth/signup/SignUp';
import Home from '@/pages/home/Home';
import Login from '@/pages/auth/login/Login';

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/SignUp' element= {<SignUp/>}/>
            <Route path='/Login' element = {<Login/>}/>
        </Routes> 
    );
}

export default RoutesIndex;