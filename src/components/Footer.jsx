const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      (c){" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.dyannaturner.com"
      >
        Dyanna Turner
      </a>
      , {year}
    </div>
  );
};

export default Footer;
