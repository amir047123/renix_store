import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Announcement = () => {
  const [titles, setTitles] = useState([""]);
  const [error, setError] = useState("");
  const [getTitles, setGetTitles] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleAddField = () => {
    setTitles([...titles, ""]);
    setError("");
  };

  const handleTitleChange = (index, e) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
  };

  const handleDeleteField = (indexToDelete) => {
    setTitles(titles.filter((_, index) => index !== indexToDelete));
  };

  const handleAddAnnouncement = async () => {
    try {
      if (titles.length === 0) {
        setError("This field is required");
      } else {
        const announcementData = {
          title: titles,
        };

        const res = await axios.post(
          "http://localhost:5000/api/v1/announcements/addAnnouncement",
          announcementData
        );
        if (res?.data?.data === null) {
          toast.error("already added a annoucment. Please delete previous one");
        }
        toast.success("Announcement added successfully");

        setTitles([""]);
        fetchAnnouncements();
      }
    } catch (error) {}
  };

  const handleDeleteAnnouncement = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/announcements/deleteAnnouncement/${id}`
      );
      fetchAnnouncements();
      toast.success("Delete  successfully annoucment");

    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/announcements/getAnnouncements"
      );
      setGetTitles(res.data.data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <div>
      <div className="mb-4 font-openSans w-1/2">
        <div className="flex items-center gap-20 my-3">
          <label className="mb-2 inline-block text-lg" htmlFor="title">
            Title
            <span className="text-secondary">*</span>
          </label>
          <button
            className="border border-solid border-primary rounded-full p-2"
            onClick={handleAddField}
          >
            <FaPlus />
          </button>
        </div>
        {titles.map((title, index) => (
          <div className="flex items-center gap-5" key={index}>
            <input
              id={`title-${index}`}
              name={`title-${index}`}
              placeholder="Enter announcement title"
              className="w-full block py-3 px-5 my-3 rounded-full border border-solid border-borderColor outline-0"
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(index, e)}
            />
            {titles.length > 1 && (
              <button onClick={() => handleDeleteField(index)}>
                <MdDelete size={30} className="text-red-500" />
              </button>
            )}
          </div>
        ))}
        {error && <span className="text-red-500 text-sm">{error}</span>}
        <button
          onClick={handleAddAnnouncement}
          className="bg-primary rounded-full text-white px-4 py-2 text-lg font-openSans uppercase"
        >
          Add Announcement
        </button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className=" border"> 
                <th className="whitespace-nowrap px-4 py-2 border font-medium text-gray-900">
                  Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {getTitles.map((announcement) => (
                <tr key={announcement._id}>
                  <td className="whitespace-nowrap border border-solid border-collapse border-gray-200 px-4 py-2 font-medium text-gray-900">
                    {announcement.title.map((t, index) => (
                      <p key={index}>{t}</p>
                    ))}
                  </td>
                  <td className="whitespace-nowrap border border-solid border-collapse border-gray-200 px-4 py-2 font-medium text-gray-900">
                    <button
                      onClick={() => handleDeleteAnnouncement(announcement._id)}
                    >
                      <MdDelete size={30} className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
