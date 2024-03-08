import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddProductFaq = () => {
  const { id } = useParams();

  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [notification, setNotification] = useState({ type: "", message: "" });

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
      const response = await axios.post("http://localhost:5000/api/v1/productFAQs/addProductFAQ", {
        productId: id,
        faqs: faqs.map(({ question, answer }) => ({ question, answer })),
      });
      console.log(response.data);
      toast.success("FAQs added successfully");
  
      // Clear input fields and reset state
      setFaqs([{ question: "", answer: "" }]);
      setNotification({ type: "", message: "" });
      event.target.reset(); // Reset the form
    } catch (error) {
      console.error("Error adding FAQs:", error); // Log the error
      toast.error("Failed to add FAQs");
    }
  };
  
  

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Post FAQs</h2>
     
      <form onSubmit={handleSubmit}>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <label htmlFor={`question-${index}`} className="block text-gray-700">Question</label>
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
              <label htmlFor={`answer-${index}`} className="block text-gray-700">Answer</label>
              <textarea
                name="answer"
                value={faq.answer}
                onChange={(event) => handleInputChange(index, event)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                rows={3}
                required
              />
            </div>
            <button type="button" onClick={() => handleRemoveInputField(index)} className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddInputField} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Add FAQ</button>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default AddProductFaq;
