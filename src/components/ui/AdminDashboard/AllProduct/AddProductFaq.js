import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const AddProductFaq = () => {
  const { id } = useParams();
  const [allFaqs, setAllFaqs] = useState([]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [notification, setNotification] = useState({ type: "", message: "" });
  const [updateFaq, setUpdateFaq] = useState(false);
  const handleAddInputField = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveInputField = (index) => {
    const newFaqs = [...faqs];
    newFaqs.splice(index, 1);
    setFaqs(newFaqs);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFaqs = [...faqs];
    newFaqs[index][name] = value;
    setFaqs(newFaqs);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Your updateFaq logic goes here if needed

      // Add your conditionally rendered JSX inside this block
      if (!updateFaq) {
        const response = await axios.post(
          "http://localhost:5000/api/v1/productFAQs/addProductFAQ",
          {
            productId: id,
            faqs: faqs.map(({ question, answer }) => ({ question, answer })),
          }
        );
        console.log(response.data, "helo");
        if (response.data.status === "error") {
          toast.error(response.data.message);
        } else {
          toast.success("FAQs added successfully");
        }

        // Clear input fields and reset state
        setFaqs([{ question: "", answer: "" }]);
        setNotification({ type: "", message: "" });
        event.target.reset(); // Reset the form
        fetchUpdatedFaqs();
      } else {
        const response = await axios.patch(
          `http://localhost:5000/api/v1/productFAQs/updateProductFAQ/${id}`,
          {
            faqs: faqs.map(({ question, answer }) => ({ question, answer })),
          }
        );
        toast.success("Question Updated Successfully!");
        console.log(response.data, "helo");

        fetchUpdatedFaqs();
      }
    } catch (error) {
      console.error("Error adding FAQs:", error); // Log the error
      toast.error("Failed to add FAQs");
    }
  };

  // Function to fetch updated FAQs from the server
  const fetchUpdatedFaqs = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/productFAQs/getProductFAQById/${id}`
      );
      setAllFaqs(data?.data?.faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      toast.error("Failed to fetch FAQs");
    }
  }, [id]);
  useEffect(() => {
    fetchUpdatedFaqs();
  }, [fetchUpdatedFaqs]);

  const handleEditFaq = async () => {
    setUpdateFaq(true);
    setFaqs(
      allFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
    );
  };

  const handleDeleteFaq = async (idToDelete) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/productFAQs/deleteProductFAQ/${idToDelete}`
      );

      if (data.status === "success") {
        console.log(data);
        toast.success("Delete successful");
        setAllFaqs([]);
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      console.error("Error deleting FAQ:", error); // Log the error
      toast.error("Failed to delete FAQ");
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Post FAQs</h2>

        <form onSubmit={handleSubmit}>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2">
                <label
                  htmlFor={`question-${index}`}
                  className="block text-gray-700"
                >
                  Question
                </label>
                <input
                  type="text"
                  name="question"
                  value={faq.question}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor={`answer-${index}`}
                  className="block text-gray-700"
                >
                  Answer
                </label>
                <textarea
                  name="answer"
                  value={faq.answer}
                  onChange={(event) => handleInputChange(index, event)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  rows={3}
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveInputField(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddInputField}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Add FAQ
          </button>
          {/* Submit button */}
          {updateFaq ? (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              Update
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          )}
        </form>
      </div>
      {/*  Displaying the submitted data */}
      <div className="px-20 w-full">
        <h2 className="text-2xl font-bold mb-4">All Faqs</h2>

        {allFaqs?.length === 0 ? (
          <p>No faq add yet</p>
        ) : (
          <div className="relative">
            <table className="table-auto border-collapse border border-gray-500 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-500 px-4 py-2">No</th>
                  <th className="border border-gray-500 px-4 py-2">Question</th>
                  <th className="border border-gray-500 px-4 py-2">Answer</th>
                  <th className="border border-gray-500 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {allFaqs?.map((item, index) => (
                  <tr
                    key={index}
                    className={(index + 1) % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="border border-gray-500 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-500 px-4 py-2">
                      {item.question}
                    </td>
                    <td className="border border-gray-500 px-4 py-8">
                      {item.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="absolute top-1/2 -translate-y-1/2 right-10 mr-4 mt-4 flex gap-2 py-3">
              <div
                onClick={() => handleEditFaq(allFaqs)} // Assuming you want to edit the first FAQ
                className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
              >
                <Icon icon="uil:edit"></Icon>
              </div>
              <div
                onClick={() => handleDeleteFaq(id)} // Assuming you want to edit the first FAQ
                className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
              >
                <Icon icon="material-symbols:delete-outline" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProductFaq;
