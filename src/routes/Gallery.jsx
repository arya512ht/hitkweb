import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";


function Gallery() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Gallery"
        btnClass="hide"
      />
      <h1>gallery</h1>
      <Footer />
    </>
  );
}

export default Gallery;