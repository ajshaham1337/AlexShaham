import { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Contact() {
  const [subject, setSubject] = useState("Business Inquiry");
  const handleSubject = (event) => {
    setSubject(event.target.value);
  };
  return (
    <div className="col">
      <form
        className="card text-white bg-dark h-100"
        action="https://formsubmit.co/ajshaham@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_autoresponse"
          value="Your response has been received!"
        ></input>
        <input type="hidden" name="_subject" value={subject} />
        <div className="card-header text-center fs-4">Contact Me</div>
        <div className="card-body">
          {/* <div className="mb-2">
            <label htmlFor="validationDefault01" className="form-label">
              Phone Number
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="validationDefault01"
              placeholder="name@example.com"
              required
            />
          </div> */}
          <div className="mb-2">
            <label htmlFor="validationDefault01" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="validationDefault01"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="validationDefault02" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Business Inquiry"
              onChange={handleSubject}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="validationDefault03" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="validationDefault03"
              rows="3"
              placeholder="Hello there!"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="card-footer text-center">
          <div className="row">
            <div className="col">
              {<AiOutlineMail color="white" size={22} />}
              <p className="card-text">ajshaham@gmail.com</p>
            </div>
            <div className="col">
              {<AiOutlinePhone color="white" size={22} />}
              <p className="card-text">(323) 422-0701</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
