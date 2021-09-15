import { useState } from 'react';
import { decode } from 'html-entities';

const ContactForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ fullname, setFullname ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if( ! fullname ){
      setError( 'Please enter a valid name' );
      return null;
    }

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ FULLNAME: fullname, EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="contact-form text-center">
        <div className="mc-field-group">
          <input
            onChange={(event) => setFullname(event?.target?.value ?? '')}
            type="text"
            placeholder="Enter your full name"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Enter your email address"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button mt-4">
          <button className="wp-block-button__link" onClick={handleFormSubmit}>
            Get Started
          </button>
        </div>
      </div>
      <div className="newsletter-form-info text-center mt-5">
        {status === "sending" && <p className="text-black">Sending...</p>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          // <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
          <p className="text-black">Thank you! We will get in touch with you as soon as possible.</p>
        )}
      </div>
    </>
  );
}

export default ContactForm