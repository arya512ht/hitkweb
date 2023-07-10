import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import "../components/ContactStyle.css"
import AboutImg from "../assets/night.jpg";
import HomeHero from "../components/HomeHero";

function Contact() {
    return (
        <>
            <Navbar />
            <HomeHero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"
                btnClass="hide"
            />
            <section className="location">
                <Location />
            </section>
            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>Chowbaga Road, Anandapur</h5>
                                <p>PO: East Kolkata Township, Kolkata - 700 107</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>INFO DESK: 9830201234</h5>
                                <p>Ph: +91 33 6627 0600 / 0609 / 0614 / 0622</p>
                                <p>Fax: +91 33 2443 0455 / 1794</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>E-mail: admin@heritageit.edu</h5>
                                <p>Email us your query</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form method="post" action="/">
                            <input type="text" name="name" placeholder="Enter your name" required />
                            <input type="email" name="email" placeholder="Enter email address" required />
                            <input type="text" name="subject" placeholder="Enter your subject" required />
                            <textarea rows="8" name="message" placeholder="Message" required></textarea>
                            <button type="button" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;