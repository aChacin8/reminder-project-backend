import {Routes, Route} from 'react-router-dom';
import SignUp from '@/pages/auth/SignUp';
import Home from '@/pages/home/Home';

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/SignUp' element= {<SignUp/>}/>
        </Routes>
    );
}

export default RoutesIndex;