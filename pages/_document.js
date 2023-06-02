import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
        </body>

        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
      
        window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
      
        window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
      
      
      
      
        window.translation = {
          common: {
            selectedList: '{quantity} list selected',
            selectedLists: '{quantity} lists selected'
          }
        };
      
        var AUTOHIDE = Boolean(0);
      </script>
      <script defer src="https://sibforms.com/forms/end-form/build/main.js">
      `,
          }}
        ></script>
      </Html>
    );
  }
}
