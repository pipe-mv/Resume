import { useForm } from "../hooks/useForm";
import Loader from "../assets/loader.svg";
import ContactFormModal from "./ContactFormModal";

const initialForm = {
  name: "",
  email: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "The field 'Name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = `The field 'Name' only accepts letters and white spaces`;
  }

  if (!form.email.trim()) {
    errors.email = "The field 'E-mail' is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = `The field 'E-mail' is incomplete`;
  }

  if (!form.comments.trim()) {
    errors.comments = "The field 'Comments' is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = `The field 'Comments' only accepts a max of 250 characters`;
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <form className="contact-form box-shadow-1" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Please enter your name *"
          title="Name only accepts spaces and letter characters"
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          required
        />
        {errors.name && <p style={styles}> {errors.name} </p>}
        <input
          type="email"
          name="email"
          placeholder="Please enter your e-mail *"
          title="Email only accepts E-mail format 'yourName@yourEmail.com' "
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={styles}> {errors.email} </p>}
        <textarea
          name="comments"
          cols="50"
          rows="10"
          placeholder="Leave any Message *"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          title="Comments field accepts a max of 250 Characters "
          required
        ></textarea>
        {errors.comments && <p style={styles}> {errors.comments} </p>}

        <div
          className={`contact-form-loader text-center ${loading ? "" : "none"}`}
        >
          <img src={Loader} alt="Sending..." />
        </div>
        <input className="btn" type="submit" value="SEND MESSAGE" />
      </form>

      {response && <ContactFormModal response={response} />}
    </div>
  );
};

export default ContactForm;
