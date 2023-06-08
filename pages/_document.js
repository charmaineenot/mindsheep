import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    const brevoCss = `
    @font-face {
      font-display: block;
      font-family: Roboto;
      src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
    }
  
    @font-face {
      font-display: fallback;
      font-family: Roboto;
      font-weight: 600;
      src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
    }
  
    @font-face {
      font-display: fallback;
      font-family: Roboto;
      font-weight: 700;
      src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
    }
  
    #sib-container input:-ms-input-placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
    }
  
    #sib-container input::placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
    }
  
    #sib-container textarea::placeholder {
      text-align: left;
      font-family: "Helvetica", sans-serif;
      color: #c0ccda;
    }
 
  
  `;
    return (
      <Html>
        <Head>
          <style>{brevoCss}</style>
          <link
            rel="stylesheet"
            href="https://sibforms.com/forms/end-form/build/sib-styles.css"
          />
        </Head>
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
     
      
      `,
          }}
        ></script>
        <script
          defer
          src="https://sibforms.com/forms/end-form/build/main.js"
        ></script>
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


`,
          }}
        ></script>
        <script
          defer
          src="https://sibforms.com/forms/end-form/build/main.js"
        ></script>
      </Html>
    );
  }
}
