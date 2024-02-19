import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Announcement = () => {
  const [titles, setTitles] = useState([""]);

  const handleAddField = () => {
    setTitles([...titles, ""]);
  };

  const handleTitleChange = (index, e) => {
    const newTitles = [...titles];
    newTitles[index] = e.target.value;
    setTitles(newTitles);
  };

  const handleDeleteField = (indexToDelete) => {
    setTitles(titles.filter((title, index) => index !== indexToDelete));
  };

  const handleAddAnnoucment = async () => {
    const announcementData = {
      titles,
    };
    const res = await axios.post(
      "http://localhost:5000/api/v1/announcements/addAnnouncement",
      announcementData
    );

    console.log(res);
  };
  console.log(titles, "titles");
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
        <button
          onClick={handleAddAnnoucment}
          className="bg-primary rounded-full text-white px-4 py-2 text-lg font-openSans uppercase"
        >
          Add Announcement
        </button>
      </div>
    </div>
  );
};

export default Announcement;
