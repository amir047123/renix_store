import React from 'react';
import { Link } from 'react-router-dom';
import { server_url } from '../../../../Config/API';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminBlogTable = ({ data, setRefetch }) => {
  const url = `${server_url}/homeContents/deleteHomeContents/${data?._id}`;

  const handleDelete = async () => {
    try {
      await axios.delete(url);
      toast.success('Blog post deleted successfully');
      setRefetch(prevState => !prevState); 
    } catch (error) {
      toast.error('Error deleting blog post');
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <tr>
     
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-900 whitespace-no-wrap">{data?.title}</p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div dangerouslySetInnerHTML={{ __html: data?.description?.slice(0, 50) }}></div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-300">
        <div className="flex gap-5 items-center">
          <button
            onClick={handleDelete}
            className="bg-primary p-2 text-white rounded-full hover:bg-primary/80"
          >
            Delete
          </button>
          <Link
            to={`/adminDashboard/update-home-content/${data?._id}`}
            className="bg-primary block p-2 text-white rounded-full hover:bg-primary/80"
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AdminBlogTable;
