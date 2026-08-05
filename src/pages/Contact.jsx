import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaFilePdf,
  FaImage,
  FaVideo,
  FaDownload
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnjjqllb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await response.json();
        if (Object.hasOwn(json, "errors")) {
          setErrorMessage(json.errors.map((err) => err.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
        setStatus("error");
      }
    } catch {
      setErrorMessage("Oops! There was a problem submitting your form");
      setStatus("error");
    }
  };

  return (
    <section className="section contact-section cloudy-bg">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="contact-form-container">
              <div className="text-center">
                <h2 className="mb-5 contact-heading">CONNECT WITH SAHANA</h2>
              </div>

              {status === "success" ? (
                <div className="text-center py-5">
                  <FaCheckCircle className="text-success mb-3" size={60} />
                  <h3 className="text-white mb-3">Message Sent!</h3>
                  <p className="text-white-50">
                    Thank you for reaching out. Sahana will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="btn btn-outline-light mt-3"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6 mb-3">
                      <label className="form-label contact-label">YOUR NAME</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-control form-control-lg contact-input"
                        placeholder="Sahana Hegde"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label contact-label">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control form-control-lg contact-input"
                        placeholder="sahanahegde@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label contact-label">MESSAGE</label>
                    <textarea
                      name="message"
                      required
                      className="form-control form-control-lg contact-input"
                      rows="4"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {status === "error" && (
                    <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                      <FaExclamationCircle className="me-2" />
                      <div>{errorMessage}</div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-lg w-100 contact-btn"
                  >
                    {status === "submitting" ? "SENDING..." : "SEND INQUIRY"}
                  </button>
                </form>
              )}

              <div className="contact-direct-info mt-5 pt-4 border-top border-secondary border-opacity-25 text-center">
                <p className="contact-label mb-3" style={{ fontSize: "0.7rem" }}>
                  OR REACH US DIRECTLY
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <a href="mailto:hegdesahana80@gmail.com" className="contact-link-item">
                    <strong>Email:</strong> hegdesahana80@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Official Profile Kit Download Card */}
            <div className="profile-kit-section mt-5" data-aos="fade-up" data-aos-delay="200">
              <div className="profile-kit-card">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="kit-content">
                    <h3 className="kit-heading">OFFICIAL PROFILE KIT</h3>
                    <p className="kit-desc">
                      Download the complete electronic press kit containing high-res images, biography PDF, and promotional videos.
                    </p>
                    <div className="kit-badges">
                      <span className="badge-item">
                        <FaFilePdf /> Biography
                      </span>
                      <span className="badge-item">
                        <FaImage /> Photos
                      </span>
                      <span className="badge-item">
                        <FaVideo /> Promo Video
                      </span>
                    </div>
                  </div>
                  <a
                    href="/kit/SahanaHegde_ProfileKit.zip"
                    download="SahanaHegde_ProfileKit.zip"
                    className="btn btn-download text-decoration-none"
                  >
                    <FaDownload className="me-2" /> DOWNLOAD KIT
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
