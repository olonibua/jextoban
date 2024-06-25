import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    findUs: "",
    message: "",
    receiveNotes: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission,
    // e.g., send the data to a server or API.
  };

  return (
    <div className="grid sm:flex">
      <div className="flex-[100%] sm:flex-[28%] sm:mt-20">
        <p className="text-[18px] font-[600] sm:text-[20px] mt-5 sm:mt-0 max-w-[330px] sm:max-w-[220px]">
          Hi. We’re Upstatement, a digital product studio with an editorial
          mindset.
        </p>
        <span className="mt-3 text-[20px] font-[600]">How can we help?</span>
      </div>
      <div className="flex-[100%] sm:flex-[72%] text-[18px] font-[600] sm:text-[20px] p-2 sm:p-10">
        {submitted ? (
          <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
            Thank you for contacting us! We will get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-10 w-[100] sm:w-[90%] my-4">
              <div className="grid">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b outline-none bg-transparent border-gray-600"
                  required
                />
                <label>Name</label>
              </div>
              <div className="grid">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b outline-none bg-transparent border-gray-600"
                  required
                />
                <label>Email</label>
              </div>
              <div className="grid">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="border-b outline-none bg-transparent border-gray-600"
                />
                <label>Company Name</label>
              </div>
              <div className="grid">
                <input
                  type="text"
                  name="findUs"
                  value={formData.findUs}
                  onChange={handleChange}
                  className="border-b border-gray-400 outline-none bg-transparent"
                />
                <label>How did you find us?</label>
              </div>
            </div>
            <div className="w-[100] sm:w-[90%] mt-10 sm:mt-20">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border h-[100px] border-gray-600 outline-none bg-transparent rounded-lg w-full p-2"
                required
              ></textarea>
              <label>What do you want to build?</label>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <input
                type="checkbox"
                name="receiveNotes"
                checked={formData.receiveNotes}
                onChange={handleChange}
                className="h-5 w-5"
              />
              <p className="max-w-[500px]">
                I would like to receive a note every few weeks with inspiration,
                weird internet things, and good news.
              </p>
            </div>
            <button
              type="submit"
              className="border mt-3 rounded-full items-center w-[130px] h-10 sm:w-[140px] text-[18px] sm:text-[22px] font-[500]"
            >
              Contact Us
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
