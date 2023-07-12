import { useState } from "react";

const ContactFormModal = ({ response }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  const [close, setClose] = useState(true);

  console.log(response);

  const closeModal = (close) => {
    return setClose(!close);
  };

  return (
    <article
      id="thanks"
      className={`modal ${
        response ? (closeModal ? (close ? "is-open" : "") : "") : ""
      }`}
      onClick={closeModal}
    >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <a href="#cerrar" className="modal-close" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
          </svg>
        </a>

        <div className="modal-content">
          <article className="contact-form-response">
            <h3>
              Thank you very much For your message !
              <br />
              <br />
              I'll get back to you as soon as I can.
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
              <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
              <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
            </svg>
          </article>
        </div>
      </div>
    </article>
  );
};

export default ContactFormModal;
