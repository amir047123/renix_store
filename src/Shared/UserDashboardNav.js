import { Link, useLocation } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import AuthUser from "../Hooks/authUser";

const UserDashboardNav = ({ Outlet }) => {
  const location = useLocation();
  const { userRole, logout } = AuthUser();

  return (
    <div>
      <div className="bg-[#f5f5f5]  overflow-hidden">
        <PageHeader title="My Account" />
        <div className=" mx-auto max-lg:overflow-x-auto w-full">
          <div className="pt-12 container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white order-2 md:order-1 p-5 shadow-custom h-fit col-span-2 lg:col-span-3">
                <Outlet />
              </div>
              <div className="bg-white order-1 md:order-2 h-fit shadow-custom  auto-cols-fr">
                <h2 className="p-4 pl-5 font-oswald font-medium text-[#292929] border-l-2 border-solid border-l-primary border-b border-b-borderColor">
                  MY ACCOUNT
                </h2>
                <ul className="p-4 pl-5 font-openSans text-sm flex flex-col gap-3">
                  <li>
                    <Link
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"/my-account"}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      state={location?.pathname}
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"/my-account/orders"}
                    >
                      orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"/my-account/downloads"}
                    >
                      downloads
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"/my-account/edit-address"}
                    >
                      Addresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"/my-account/edit-account"}
                    >
                      Account details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize"
                      to={"my-favorite"}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li onClick={logout} className="text-[#333] hover:text-black hover:ml-3 transition-all duration-200 capitalize cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            {/* childern */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardNav;
