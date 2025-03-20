import {Routes, Route} from 'react-router-dom';
import SignUp from '@/pages/auth/SignUp';
import Home from '@/pages/home/Home';
import Login from '@/pages/auth/Login';
import Reminder from '@/pages/reminder/Reminder';

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/SignUp' element= {<SignUp/>}/>
            <Route path='/Login' element = {<Login/>}/>
            <Route path='/Reminder' element = {<Reminder/>}/>
        </Routes>  
    );
}

export default RoutesIndex;