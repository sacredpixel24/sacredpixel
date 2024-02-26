import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-center">Get In Touch</h2>

                  <form>
                    <Row className="mb-3">
                      <Col xs={12} sm={6} className="px-1 mb-3 mb-sm-0">
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="1.5"
                          onChange={(e) => setSubject(e.target.value)}
                          type="text"
                          placeholder="Phone number"
                          className="form-control"
                        ></textarea>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="1.5"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Message"
                          className="form-control"
                        ></textarea>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="px-1">
                        <button
                          type="submit"
                          onClick={() => sendEmail()}
                          className="btn submit-btn w-100"
                          style={{ fontWeight: "bold" }} // Add style for bold text
                        >
                          <span>Submit</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
