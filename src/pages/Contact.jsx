import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API call here to send the message
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto flex flex-col px-4 items-center py-6">
      <h3 className="text-purple-800 font-bold text-2xl mb-6">Contact Page</h3>
      <div className="bg-slate-900 rounded p-6 w-full max-w-md text-white shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="rounded p-2 text-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="rounded p-2 text-black"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="rounded p-2 text-black resize-none"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
