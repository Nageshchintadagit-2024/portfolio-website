import React, { useRef , useState} from "react";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

   const form = useRef();

   const [isSent, setIsSent] =useState(false);

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s7yfaw7", //Replace with your service ID
        "template_77jl2v9", // Replace with your template ID
        form.current,
        "iafPVSWjZWP8IcrVx" // Replace with your public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset the form after successful submission
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );

   }


  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] "
    >
      <ToastContainer />
      {/* Contact Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}

      <div className="mt-8 w-full max-w-md border border-gray-700 rounded-lg shadow-lg p-6 bg-[#0d081f]">
        <h3 className="text-xl text-white font-semibold text-center">
          Connect with me
        </h3>
        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full rounded-md text-white p-3 border focus:outline-none focus:border-purple-500 bg-[#131025] "
          />
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full rounded-md text-white p-3 border focus:outline-none focus:border-purple-500 bg-[#131025] "
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full rounded-md text-white p-3 border focus:outline-none focus:border-purple-500 bg-[#131025] "
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full rounded-md text-white p-3 border focus:outline-none focus:border-purple-500 bg-[#131025] "
          ></textarea>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
