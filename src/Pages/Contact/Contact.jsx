import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../layout/NavBar";
import BaseFooter from "../../layout/BaseFooter";
import SideNav from "../../layout/SideNav";
import "./Contact.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import osmProviders from "../../utils/osm-providers";
import ActionButton from "../../components/ActionButton";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "../../components/Preloader";
import Magnetic from "../../components/Magnetic";

const markerIcon = new L.Icon({
  iconUrl: require("../../assets/img/contact/marker-icon.png"),
  iconSize: [25, 30],
  iconAnchor: [0, 0],
});

const Contact = () => {
  // To configure latitude and longitude for leaflet
  const [center, setCenter] = useState({ lat: 11.9708, lng: 8.4264 });

  // Enable and disable button when appropriate
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Track loading
  const [isloading, setIsLoading] = useState(true);

  // States to hold form value
  const [clientName, setClientName] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [clientService, setClientService] = useState();
  const [clientMessage, setClientMessage] = useState();

  //leaflet map
  const mapRef = useRef();
  const form = useRef();
  const ZOOMLEVEL = 10;

  //locomotive-scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  //EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    emailjs
      .sendForm(
        "service_ks2n17a",
        "template_mlh4rgj",
        form.current,
        "-A6xyy6bMU1XNQ4Wm"
      )
      .then(
        (result) => {
          alert("Email sent successfully. You would be contacted soon.");
          console.info(result.text);
        },
        (error) => {
          alert("An error occured try again");
          console.error(error);
        }
      );

    setClientName("");
    setClientEmail("");
    setClientService("");
    setClientMessage("");
    setButtonDisabled(false);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {isloading && <Preloader page="Contact" />}
      </AnimatePresence>
      <SideNav />
      <NavBar />
      <section className="contact-intro">
        <MapContainer
          className="leaflet-container"
          ref={mapRef}
          center={center}
          zoom={ZOOMLEVEL}
        >
          <TileLayer url={osmProviders.maptiler.url} />
          <Marker position={[11.9708, 8.4264]} icon={markerIcon} />
        </MapContainer>
        <h1>
          {"CONNECT LET'S💻 BUILD".split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                // ref={animRef}
                variants={{
                  hidden: { opacity: 0, x: 100, display: "none" },
                  visible: { opacity: 1, x: 0, display: "block" },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 2.4 + index / 2,
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </section>
      <section className="contact-form-section">
        <div className="work-toast-msg">
          {"From Pixels to Product. Building Seamless Experience"
            .split(" ")
            .map((word, index) => {
              return (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: 4.5 }}
                >
                  {word}
                </motion.span>
              );
            })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <motion.label
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4 }}
          >
            What is your Name <span>*</span> <br />
            <input
              required
              type="text"
              name="client_name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </motion.label>
          <label>
            What is your Email <span>*</span> <br />
            <input
              required
              type="text"
              name="client_email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </label>
          <label>
            What services are you looking to get <span>*</span> <br />
            <input
              required
              type="text"
              name="client_service"
              value={clientService}
              onChange={(e) => setClientService(e.target.value)}
            />
          </label>
          <label>
            What is your message <span>*</span> <br />
            <textarea
              required
              name="client_message"
              value={clientMessage}
              onChange={(e) => setClientMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="contact-button">
            <Magnetic>
              <ActionButton
                type="submit"
                value="Send Message"
                bgcolor="rgb(0,0,0,.9)"
                color="rgba(255, 255, 255, .6)"
                isDisabled={buttonDisabled}
              />
            </Magnetic>
          </div>
        </form>
      </section>
      <BaseFooter pos="static" />
    </>
  );
};

export default Contact;
