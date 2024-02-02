// Footer.js
import instagram from "../../src/images/instagram.png";
import x from "../../src/images/x.png";
import linkedin from "../../src/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-footer">
        <p className="copyright">
          &copy; 2024 Fast + Epp. All Rights Reserved.
        </p>
        <nav className="terms">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fastepp.com/privacy-policy/"
          >
            Privacy
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fastepp.com/terms-conditions/"
          >
            Terms
          </a>
        </nav>
        <div className="socials">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/fastepp/"
          >
            <img
              className="social-logo instagram-logo"
              src={instagram}
              alt="Instagram logo"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/fast_epp"
          >
            <img
              className="social-logo twitter-logo"
              src={x}
              alt="Twitter logo"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/fast-epp/"
          >
            <img
              className="social-logo linkedin-logo"
              src={linkedin}
              alt="LinkedIn logo"
            />
          </a>
        </div>
        <p className="newsletter">
          Sign up for our{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fastepp.com/newsletter/"
            className="newsletter-link"
          >
            Newsletter
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
