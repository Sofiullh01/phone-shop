import PropTypes from "prop-types";

const Phone = ({ phone }) => {
  const { image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {brand_name}
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="middle w-full none center rounded-lg bg-pink-500 p-3 font-sans font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-xl"
            data-ripple-light="true"
          >
           Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};
export default Phone;
