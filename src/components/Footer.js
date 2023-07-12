import recycleLogo from "../assets/icon-recycle.png";
import appleLogo from "../assets/icon-apple.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="uncopyright">
        <img src={recycleLogo} alt="recycle logo" />
        <p>
          Uncopyright &copy; 2022{" "}
          <a href="https://github.com/pipe-mv" target="_blank" rel="noreferrer">
            Felipe Marin, &nbsp;
          </a>
          Please recycle this code responsibly
        </p>
      </div>
      <div className="credits">
        <img src={appleLogo} alt="recycle logo" />
        <p>
          Sustainably coded with love by &nbsp;
          <a href="https://github.com/pipe-mv" target="_blank" rel="noreferrer">
            Felipe Marin
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
