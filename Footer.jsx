function Footer() {
  return (
    <footer className="footer">

      <div className="footer-columns">

        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>

          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-column">
          <h3>Stay connected</h3>

          <div className="social-icons">
            <span>f</span>
            <span>♥</span>
            <span>◎</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <h3>DEV@Deakin 2025</h3>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;