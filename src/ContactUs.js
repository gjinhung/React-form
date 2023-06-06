import { useState, useEffect } from "react";
import "./index.css"

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [comments, setComments] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};
    if (!name.length) {
      errors.name = "Please enter your Name";
    }
    if (!email.includes("@")) {
      errors.email = "Please provide a valid Email";
    }
    setValidationErrors(errors);
  }, [name, email]);

  const onSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true)
    if (Object.values(validationErrors).length) {
      return (
        <>
        </>
      )
      // alert(
      //   // `${validationErrors.name}`
      //   `The following errors were found: ${Object.values(validationErrors)}`
      // );
    }

    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      phoneType,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);

    setName("");
    setEmail("");
    setPhone("");
    setComments("");
    setPhoneType("");
    setValidationErrors({});
    setHasSubmitted(false);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {hasSubmitted === true && validationErrors.name ? <div className="errors">{validationErrors.name}</div> : null} 
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        {hasSubmitted === true && validationErrors.email ? <div className="errors">{validationErrors.email}</div> : null} 
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
