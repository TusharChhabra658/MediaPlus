import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [value, setValue] = useState("1");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("1");

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hero">
        <div className="upper-hero">
          <div className="hero-text">
            <h1>Unlock video's full potential;</h1>
            <h1>
              <span style={{ color: "#E4875D" }}>half of marketers</span>{" "}
              haven't yet!
            </h1>
            <h2 style={{ marginTop: "10vh" }}>
              <span style={{ color: "#E4875D", fontWeight: "lighter" }}>
                Media+
              </span>{" "}
              = Engage 🤩
            </h2>
            <h3
              style={{
                fontSize: "2.5vh",
                fontWeight: "light",
                color: "rgb(85, 85, 85)",
              }}
            >
              Netflix-style video discovery for your for your prospects that
              turns viewers into customers{" "}
            </h3>
            <button className="req-button">Request a demo</button>
          </div>
        </div>
        <div className="lower-hero">
          <img className="ss1" src="/src/assets/ss1.png" alt="" />
        </div>
        <img className="partners" src="/src/assets/partners.png" alt="" />
        <div className="card-container">
          <div className="headings">
            <h2
              style={{
                color: "#E4875D",
                fontWeight: "700",
              }}
            >
              Elevate your video strategy
            </h2>
            <h1 style={{ fontWeight: "500" }}>Seamless Video Management</h1>
            <h3 style={{ fontWeight: "lighter" }}>
              Transform how you engage with your audience using Media+
            </h3>
          </div>
          <div className="card-holder">
            <div className="card">
              <p className="card-top-text">2.5X</p>
              <p className="card-mid-text">Lead Generation</p>
              <p className="card-end-text">
                Boost watch time and drive more leads
              </p>
            </div>
            <div className="card">
              <p className="card-top-text">3X</p>
              <p className="card-mid-text">Publish Content Faster with AI</p>
              <p className="card-end-text">Tailor made to get more views</p>
            </div>
            <div className="card">
              <p className="card-top-text">30min</p>
              <p className="card-mid-text">Setup</p>
              <p className="card-end-text">
                Set up your video CMS in less than 30 minutes
              </p>
            </div>
          </div>
        </div>
        <button className="req-button">Request a demo</button>
      </div>
      <div className="features-container">
        <h2
          style={{
            color: "#E4875D",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Why choose Media+
        </h2>
        <h1 className="sub">
          Media+ turns video engagement into customer conversions
        </h1>
        <div className="feature-box-container">
          <div className="features">
            <div className="feature-card">
              <div className="f-text">
                Curate your video media collection with an AI powered library
              </div>
              <img
                style={{ border: "none" }}
                onClick={() => {
                  toggleOpen();
                  setValue("1");
                }}
                src="/src/assets/add.png"
                alt=""
              />
            </div>
            <div className="feature-card">
              <div className="f-text">Build,Brand & Publish your Media+</div>
              <img
                style={{ border: "none" }}
                onClick={() => {
                  toggleOpen();
                  setValue("2");
                }}
                src="/src/assets/add.png"
                alt=""
              />
            </div>
            <div className="feature-card">
              <div className="f-text">
                Gate your media, capture leads, and connect your CRM - it's easy
              </div>
              <img
                style={{ border: "none" }}
                onClick={() => {
                  toggleOpen();
                  setValue("3");
                }}
                src="/src/assets/add.png"
                alt=""
              />
            </div>
            <div className="feature-card">
              <div className="f-text">
                Track your views with detailed analytics
              </div>
              <img
                style={{}}
                onClick={() => {
                  toggleOpen();
                  setValue("4");
                }}
                src="/src/assets/add.png"
                alt=""
              />
            </div>
          </div>
          <div className="feature-images">
            <img className="f-img" src={`/src/assets/f${value}.png`} alt="" />
          </div>
        </div>
      </div>
      <div className="features-sm">
        <img className="feature-sm-img" src="/src/assets/f1.png" alt="" />
        <div className="feature-card" style={{backgroundColor:"rgb(251, 255, 231)"}}>
          <div className="f-text">
            Curate your video media collection with an AI powered library
          </div>
          <div className="para">End manual video uploads and tedious metadata tasks! Hubilo AI automates SEO-optimised metadata creation along with tags and categories mapped to you media in minutes.</div>
        </div>
        <img className="feature-sm-img" src="/src/assets/f2.png" alt="" />
        <div className="feature-card" style={{backgroundColor:"rgb(231, 240, 254)"}}>
          <div className="f-text">Build,Brand & Publish your Media+</div>
        <div className="para">Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.</div>
        </div>
        <img className="feature-sm-img" src="/src/assets/f3.png" alt="" />
        <div className="feature-card" style={{backgroundColor:"rgb(254, 245, 235)"}}>
          <div className="f-text">
            Gate your media, capture leads, and connect your CRM - it's easy
          </div>
          <div className="para">Customize forms on Hubilo or import from HubSpot. Seamlessly push data to your CRM and enrich your marketing pipeline.</div>
        </div>
        <img className="feature-sm-img" src="/src/assets/f4.png" alt="" />
        <div className="feature-card" style={{backgroundColor:"rgb(253, 230, 221)"}}>
          <div className="f-text">Track your views - with detailed analytics</div>
          <div className="para">Unlock audience insights! Analyze media performance granularly to create better content and capture intent effectively.</div>
        </div>
        
      </div>
      <div className="testimonial-container">
        <img className="test" src={`/src/assets/t${image}.png`} alt="" />
        {/* <img
          className="left-arrow"
          onClick={() => (image > 1 ? setImage(image - 1) : setImage(1))}
          src="/src/assets/left-arrow.png"
          alt=""
        />

        <img
          className="right-arrow"
          onClick={() => (image < 4 ? setImage(image + 1) : setImage(4))}
          src="/src/assets/right-arrow.png"
          alt=""
        /> */}
      </div>
      <div className="video-container">
        <div className="video-headings">
          <h2
            style={{
              color: "#E4875D",
              fontWeight: "700",
            }}
          >
            With Media+
          </h2>
          <h1 style={{ fontWeight: "500" }}>
            Create an OTT platform for your media
          </h1>
          <h3 style={{ fontWeight: "lighter" }}>
            Let your videos do more than just sit on your website.Curate your
            video repository in a few easy steps and let it drive organic views
            and generate leads.
          </h3>
        </div>
        <div className="video">
          <img className="ss1" src="/src/assets/ss1.png" alt="" />
        </div>
      </div>
      <div className="label-container">
        <div className="label1">
          <span id="your">Your</span>
          <span id="text"> Videos</span>{" "}
        </div>
        <div className="label2">
          <span id="your">Your</span>
          <span id="text"> Brand</span>{" "}
        </div>
        <div className="label3">
          <span id="your">Your</span>
          <span id="text"> Website</span>{" "}
        </div>
      </div>
      <div className="spotlight">
        <div className="headings">
          <h2
            style={{
              color: "#E4875D",
              fontWeight: "700",
            }}
          >
            Media+ in action:
          </h2>
          <h1 style={{fontWeight: "500" }}>
            Customer Spotlight
          </h1>
          <h3 style={{fontWeight: "lighter" }}>
            See how customers use Media+ to create branded media sites that
            captivate and convert
          </h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
