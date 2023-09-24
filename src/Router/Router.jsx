import {createBrowserRouter} from 'react-router-dom'
import MainLayoout from '../Layout/MainLayoout'
import HOme from '../Pages/Home/HOme';
import FAvorites from '../Pages/Favoties/FAvorites';
import Login from '../Pages/Login/Login';
const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayoout></MainLayoout>,
        children: 
        [
            {
                path: '/',
                element: <HOme></HOme>,
                loader: ()=>fetch('/data.json')
            },
            {
                path: '/favorites',
                element: <FAvorites></FAvorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);
export default myRouter