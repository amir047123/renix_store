import React, { useEffect, useState } from 'react';
import AdminBlogTable from './AdminBlogTable';

const AdminAllBlog = () => {
    const [data, setData] = useState([]);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        fetch(`http://63.250.41.158:5000/api/v1/homeContents/getHomeContents`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.data.length) {
                    setData(data?.data);
                }
            });
    }, [refetch]);

    return (
        <div className="px-4 py-4 -mx-4 overflow-x-scroll sm:-mx-8 sm:px-8 ">
            <div className='w-fit mb-5'>
                <h1 className='text-lg font-semibold'> Home Content</h1>
                <div className='h-1 w-[50%] bg-primary'></div>
            </div>
            <div className="inline-block min-w-full rounded-lg shadow">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100">
                          
                            <th className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300">
                                Title
                            </th>
                            <th className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300">
                                Description
                            </th>
                            <th className="px-5 py-3 text-sm font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-300">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d) => (
                            <AdminBlogTable
                                key={d?._id}
                                data={d}
                                setRefetch={setRefetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminAllBlog;
