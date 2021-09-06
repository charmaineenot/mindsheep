import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from "./contact-form";

const ContactSubmit = () => {

  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <ContactForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default ContactSubmit;