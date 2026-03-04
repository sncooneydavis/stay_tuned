import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      {/* Top-left: Hours */}
      <div className="footer__hours">
        <h3 className="footer__heading">Hours</h3>
        <div className="footer__hours-table">
          <span className="footer__hours-day">Sun</span>
          <span>10 am - 5 pm</span>
          <span className="footer__hours-day">Mon-Thu</span>
          <span>10 am - 6 pm</span>
          <span className="footer__hours-day">Fri-Sat</span>
          <span>10 am - 7:30 pm</span>
        </div>
      </div>

      {/* Top-right: Follow us */}
      <div className="footer__social">
        <h3 className="footer__heading">Follow us</h3>
        <div className="footer__social-icons">
          <a
            href="https://www.instagram.com/stay.tuned.records"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/assets/icons/instagram.svg" alt="" className="footer__icon" />
          </a>
          <a
            href="https://www.facebook.com/staytunedrecordsfl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="/assets/icons/facebook.svg" alt="" className="footer__icon" />
          </a>
        </div>
      </div>

      {/* Bottom-left: Address */}
      <div className="footer__address">
        <a
          href="https://maps.app.goo.gl/WJGtB1aCuD3D7r9m8"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__address-link"
        >
          <img src="/assets/icons/location.svg" alt="" className="footer__icon" />
          <span className="footer__address-text">
            102 E. Tarpon Ave.<br />
            Tarpon Springs, FL 34689
          </span>
        </a>
      </div>

      {/* Bottom-right: Email */}
      <div className="footer__email">
        <h3 className="footer__heading">Email</h3>
        <a href="mailto:staytunedrecordsfl@gmail.com" aria-label="Email us">
          <img src="/assets/icons/email.svg" alt="" className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}
