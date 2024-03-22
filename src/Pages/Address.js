import { Link } from "react-router-dom";
import UsegetUserById from "../Hooks/usegetUserById";

const Address = () => {
  // const isShippingAddress = false;
  const { data } = UsegetUserById();

  return (
    <div>
      <p className="font-openSans text-sm mb-4 text-[#333]">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Billing */}
        <div>
          <h2 className="text-base uppercase font-rubic font-medium text-primary my-3">
            Billing address
          </h2>
          {data?.email ? (
            <div>
              <Link
                className="text-primary font-openSans font-bold text-sm "
                to={"/my-account/edit-address/billing"}
              >
                Edit
              </Link>
              <address className=" font-openSans text-sm text-[#999]">
                {data?.firstName} {data?.lastName}
                <br />
                {data?.email}
                <br />
                {data?.company}
                <br />
                {data?.country}
                <br />
                {data?.city}
                <br />
                {data?.country}
                <br />
                {data?.postcode}
                <br />
                {data?.streetAddress}
              </address>{" "}
            </div>
          ) : (
            <>
              <Link
                className="text-primary font-openSans font-bold text-sm "
                to={"/my-account/edit-address/billing"}
              >
                Add
              </Link>
              <p>You have not set up this type of address yet.</p>
            </>
          )}
        </div>
        {/* Shipping */}
        {/* <div>
          <h2 className="text-base font-rubic uppercase font-medium text-primary my-3">
            SHIPPING ADDRESS
          </h2>
          {isShippingAddress ? (
            <div>
              <Link
                className="text-primary font-openSans font-bold text-sm "
                to={"/my-account/edit-address/shipping"}
              >
                Edit
              </Link>
              <address className=" font-openSans text-sm text-[#999]">
                Lois Ingram
                <br />
                Nichols Cain Trading
                <br />
                68 White Old Extension
                <br />
                Libero quibusdam vol
                <br />
                Omnis et aut iste ar
                <br />
                FATA
                <br />
                MAGNAMAUTVITAESED
                <br />
                Pakistan{" "}
              </address>{" "}
            </div>
          ) : (
            <>
              <Link
                className="text-primary font-openSans font-bold text-sm "
                to={"/my-account/edit-address/shipping"}
              >
                Add
              </Link>
              <p>You have not set up this type of address yet.</p>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Address;
