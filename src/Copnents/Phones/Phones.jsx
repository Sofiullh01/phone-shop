import PropTypes from 'prop-types';
import Phone from '../Phone/Phone';


const Phones = ({phones}) => {
    console.log(phones)
    return (
        <div>
            <h1 className="text-3xl font-bold mt-10 text-center "> All category Phones</h1>
            <p className='text-center mt-3'>With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                {
                    phones?.map(phone => <Phone 
                        key={phone.id}
                        phone={phone}
                        ></Phone>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array.isRequired,
}
export default Phones;