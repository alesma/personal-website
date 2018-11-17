import "../scss/reset.scss";
import "../scss/global.scss";

import Typewriter from "../components/typewriter";
import Head from "next/head";

export default () => (
  <div className="content">
    <Head>
      <title>Alessandro Maruccia - Web developer & Designer</title>
      <meta name="description" content="I’m a web developer & designer, working in the digital world since 2006."/>
	    <meta name="robots" content="index, follow"/>
	    <meta rel="canonical" href="https://alessandromaruccia.com/"/>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
    <h1 className="title">
      <Typewriter text="Alessandro Maruccia" />
    </h1>

    <p className="hero">
      I'm <a href="mailto:alesmaru@gmail.com">available</a> for freelance design
      projects & collaborations
    </p>
    <p>
      I’m a web developer & designer, working in the digital world since 2006.{" "}
      <br /> I have worked with media agencies in Rome, startups in Berlin,
      iGaming companies in Malta.
      <br />
      I’m currently employed as Senior Front End Developer at Gaming Innovation
      Group. <br />
      If you wish, you can get in touch with me via email at{" "}
      <a href="mailto:alesmaru@gmail.com">alesmaru@gmail.com</a>.
    </p>

    {/* <p>
      <a href="/logo-design">logos</a> and <a href="/tshirts">tshirts</a>
    </p> */}

    <div className="footer">
      <p>
        Find me here:{" "}
        <a href="https://github.com/alesma" target="_blank">
          github
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/alesma/" target="_blank">
          linkedIn
        </a>{" "}
        -{" "}
        <a href="https://www.instagram.com/alesmaru/" target="_blank">
          instagram
        </a>
      </p>
      <p>Based in Malta</p>
      <p>From Galatina, Italy</p>
    </div>

    <style jsx>
      {`
        .title {
          font-size: 2.2rem;
        }

        .content {
          text-align: center;
        }

        .hero {
          margin-top: 50px;
        }

        .footer {
          margin-top: 5rem;
          color: #ccc;
        }
      `}
    </style>
  </div>
);
