import Notification from "../ui/notification";
import classes from "./contact-form.module.css";
import { useRef, useState, useEffect } from "react";

function ContactForm() {
  
  /* Creating a state variable called requestStatus and requestError. */
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  /* Creating a reference to the input fields. */
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();

  /**
   * It sends the contact details to the server and returns the response
   * @param contactDetails - This is the object that contains the contact details.
   * @returns The data is being returned.
   */
  async function SendContactData(contactDetails) {

    /* Sending the data to the server. */
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    /* Converting the response to JSON. */
    const data = await response.json();

    /* Checking if the response is ok. If it is not ok, it will throw an error. If it is ok, it will
    return the data. */
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  }

  /**
   * "When the user clicks the submit button, the function sends the contact details to the server and
   * returns the response."
   * 
   * The function is also an event handler because it's passed as an argument to
   * @param event - The event object that is passed to the event handler.
   */
  async function sendingMessageHandler(event) {
    
    event.preventDefault();

    setRequestStatus("pending");

    /* Sending the contact details to the server and returning the response. */
    try {

      const data = await SendContactData({
        email: emailInput.current.value,
        name: nameInput.current.value,
        message: messageInput.current.value,
      });

      setRequestStatus("success");
      
      emailInput.current.value = "";
      nameInput.current.value = "";
      messageInput.current.value = "";

    } catch (error) {
      
      setRequestError(error.message);
      setRequestStatus("error");

    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way..",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message stored successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  /* A hook that is used to set a timer that will clear the requestStatus and requestError after 3 seconds. */
  useEffect(() => { 
    if (requestStatus === "error" || requestStatus === "success") {
      
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  return (
    <section className={classes.contact}>
      <h1>How Can I help you?</h1>
      <form className={classes.form} onSubmit={sendingMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailInput} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input ref={nameInput} type="name" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea ref={messageInput} id="message" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
