import Banner from "../../Copnents/Header/Banner/Banner";
import Phones from "../../Copnents/Phones/Phones";
import {useLoaderData} from 'react-router-dom';


const HOme = () => {


    const phones = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
            
        </div>
    );
};


export default HOme;