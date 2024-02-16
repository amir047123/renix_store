import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";

import { FaFacebook, FaTwitch } from "react-icons/fa6";

const WishlistPage = () => {
  const cartsProduct = [1];
  return (
    <div className="bg-[#f5f5f5]  overflow-hidden">
      <PageHeader title="Wishlist" />
      <div className=" mx-auto max-lg:overflow-x-auto w-full">
        <div className="pt-12 container">
          <div className="bg-white p-5 shadow-custom max-lg:min-w-[900px]">
            {cartsProduct.length === 0 ? (
              <>
                <div>
                  <p className="font-rubic text-sm text-[#333] mb-6">
                    Your Wishlist is currently empty.
                  </p>
                  <Link
                    to={"/"}
                    className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm "
                  >
                    Return to shop
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-full overflow-x-auto">
                  <table
                    className="w-full text-left border border-separate rounded border-slate-200"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0  text-slate-700 w-9 "
                        >
                          <input type="checkbox" name="" id="" />
                        </th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0  text-slate-700  w-9"
                        ></th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700   w-[100px]"
                        ></th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[500px]  "
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700  w-[150px]"
                        >
                          Unit Price
                        </th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium border-l first:border-l-0 w-[300px]"
                        >
                          Date Added
                        </th>
                        <th
                          scope="col"
                          className="h-12 px-6 text-sm font-medium border-l first:border-l-0  text-center "
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          <input type="checkbox" name="" id="" />
                        </th>
                        <td className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          x
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          <img
                            className="w-12"
                            src="/assets/products/p1.jpg"
                            alt=""
                          />
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          Apple Watch
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          White
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          Wearables
                        </td>
                        <td className="h-20 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                            Apply coupon{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={100}
                          className="h-24 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <select
                                name=""
                                id=""
                                className="h-9 w-40 border border-solid border-borderColor"
                              >
                                <option value="actions">Actions</option>
                                <option value="cart">Add to cart</option>
                                <option value="remove">Remove</option>
                              </select>
                              <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3 ">
                                Apply Actions
                              </button>
                            </div>
                            <div>
                              <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                                Add Selected to Cart
                              </button>
                              <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3">
                                Add All to Cart
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="flex justify-end items-center">
                    <div className="flex items-center gap-4 py-8">
                      <span>Share on</span>
                      <FaFacebook />
                      <FaTwitch />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
