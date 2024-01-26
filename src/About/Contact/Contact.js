import React, { useState } from "react";
import "../Contact/Contact.css";
import axios from "axios"
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { TbWorldSearch } from "react-icons/tb";
import swal from 'sweetalert';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.number.trim() || !formData.date.trim()) {
      alert("All fields are required");
      return;
    }

    // Make an API call using Axios to store the form data
    try {
      const response = await axios.post("http://localhost:5001/user", formData);

      if (response.status === 201) {
        // Successful API call, handle accordingly (e.g., show success message)
        console.log("Form data submitted:", formData);
        swal({
          title: "Good job!",
          text: "Form submitted successfully!",
          icon: "success",
        });

        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          number: "",
          date: "",
        });
      } else {
        // Handle errors from the API
        console.error("Error submitting form:", response.statusText);
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      // Handle network errors or errors thrown by axios
      console.error("Error submitting form:", error.message);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>

      <section className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">Send us a message</h3>
                      <form
                        id="contactForm"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                value={formData.name}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="phone number"
                                className="form-control"
                                name="number"
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                                value={formData.number}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="date"
                                className="form-control"
                                name="date"
                                onChange={handleInputChange}
                                value={formData.date}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Book Appointment"
                                className="btn btn-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Contact us</h3>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker">
                            <a
                              href="https://maps.google.com/?q=Mehta+Rd,+opposite+Dic+Office,+old,+Focal+Point,+GTB+Nagar,+Amritsar,+Amritsar+Cantt.,+Punjab+143001"
                              target="_blank"
                            >
                              <MdOutlineLocationOn />
                            </a>
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span>

                            <a href="https://maps.google.com/?q=Mehta+Rd,+opposite+Dic+Office,+old,+Focal+Point,+GTB+Nagar,+Amritsar,+Amritsar+Cantt.,+Punjab+143001"
                              target='_blank'> Mehta Rd, opposite Dic Office, old, Focal Point,
                              GTB Nagar, Amritsar, Punjab 143001</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center" >
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone">
                            <a href="https://wa.me/7382325000" target="_blank" rel="noopener noreferrer">
                              <MdOutlineWifiCalling3 />
                            </a>
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span>
                            <a href="https://wa.me/7382325000" target="_blank" rel="noopener noreferrer"> 91 73823-25000</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane">
                            <a href="mailto:deolsimrat27@gmail.com">
                              <CgMail />
                            </a></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>
                            <a href="mailto:deolsimrat27@gmail.com">
                              deolsimrat27@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe">
                            <a href="https://www.google.com/search?q=DR.Deol+homeopathy.com" target="_blank" rel="noopener noreferrer">
                              <TbWorldSearch />
                            </a>
                          </span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Website:</span>
                            <a href="https://www.google.com/search?q=DR.Deol+homeopathy.com" target="_blank" rel="noopener noreferrer" >DR.Deol homeopathy.com</a>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
