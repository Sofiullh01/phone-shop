import {Outlet} from 'react-router-dom';
import Navber from '../Copnents/Header/Navber/Navber';
const MainLayoout = () => {
    return (
        <div className='max-w-6xl mx-auto px-8'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoout;