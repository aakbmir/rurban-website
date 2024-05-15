import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => emailjs.init("bM9A-n8D5Hhyj6AVu"), []);

  const sendEmailValidationRequest = async (email) => {
    setLoading(true);
    try {
      const serviceId = "service_v761t25";
      const templateId = "template_0pfi80n";
      try {
        console.log("send");
        await emailjs.send(serviceId, templateId, {
          from_name: email.name,
          email: email.email,
          message: email.message,
        });
        toast.success("Your message has been successfully sent to the team.");
      } catch (error) {
        toast.error("Error in sending the message to the team.");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  async function onSubmit(data) {
    const newMsg = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    console.log(newMsg);
    sendEmailValidationRequest(newMsg);
  }

  function onError(error) {
    console.log("error", error);
  }

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Contact Us</p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          className="ft-input"
          placeholder="Enter your Name"
          type="text"
          id="email"
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 4,
              message: "min characters allowed: 4",
            },
          })}
        />
        <input
          className="ft-input"
          placeholder="Enter a valid email address"
          type="text"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <textarea
          type="text"
          inputMode="email"
          className="ft-textarea"
          placeholder="Message"
          name="message"
          {...register("message", {
            required: "This field is required",
          })}
        ></textarea>
        <p></p>
        <br />
        <button disabled={loading} className="text-appointment-btn">
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default Contact;
