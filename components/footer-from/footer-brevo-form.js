import React from "react";

export default function FooterBrevoForm() {
  return (
    <>
      <div
        class="sib-form"
        style={{
          textAlign: "center",
          backgroundColor: "#EFF2F7",
        }}
      >
        <div id="sib-form-container" class="sib-form-container">
          <div
            id="error-message"
            class="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              fontFamily: '"Helvetica", sans-serif',
              color: "#661d1d",
              backgroundColor: "#ffeded",
              borderRadius: "3px",
              borderColor: "#ff4949",
              maxWidth: "540px",
            }}
          >
            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg
                viewBox="0 0 512 512"
                class="sib-icon sib-notification__icon"
              >
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="success-message"
            class="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              fontFamily: '"Helvetica", sans-serif',
              color: "#085229",
              backgroundColor: "#e7faf0",
              borderRadius: "3px",
              borderColor: "#13ce66",
              maxWidth: "540px",
            }}
          >
            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg
                viewBox="0 0 512 512"
                class="sib-icon sib-notification__icon"
              >
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                Your subscription has been successful.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="sib-container"
            class="sib-container--large sib-container--vertical"
            style={{
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,1)",
              maxWidth: "540px",
              borderRadius: "3px",
              borderWidth: "1px",
              borderColor: "#C0CCD9",
              borderStyle: "solid",
              direction: "ltr",
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://769b5f78.sibforms.com/serve/MUIFAAi5dJdE04pREMAB840u2LxKRy-Nqqlpvar91sd3NUbncVbiPPM-j65RDPDyO7vKgA5NPNaPa8NxTVJsTJ6wZtVgFavP8XE40GVcHnXEMPeE4XvxRtI9fqSg2VvmjItv1kZCQxqdrCgA3QjWZ9SJigVqXEkGW44yOw_09nshZttFYBrV_xOjnjf7O7N3J8uksTFzCC_jZuO2"
              data-type="subscription"
            >
              <div style={{ padding: "8px 0;" }}>
                <div
                  class="sib-form-block"
                  style={{
                    fontSize: "32px",
                    textAlign: "left",
                    fontWeight: "700",
                    fontFamily: '"Helvetica", sans-serif',
                    color: "#3C4858",
                    backgroundColor: "transparent",
                  }}
                >
                  <p>Newsletter</p>
                </div>
              </div>
              <div style={{ padding: "8px 0;" }}>
                <div
                  class="sib-form-block"
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    fontFamily: '"Helvetica", sans-serif',
                    color: "#3C4858",
                    backgroundColor: "transparent",
                  }}
                >
                  <div class="sib-text-form-block">
                    <p>Subscribe to our newsletter and stay updated.</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0;" }}>
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row ">
                      <label
                        class="entry__label"
                        style={{
                          fontWeight: "700",
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: '"Helvetica", sans-serif',
                          color: "#3c4858",
                        }}
                        for="EMAIL"
                        data-required="*"
                      >
                        Enter your email address to subscribe
                      </label>

                      <div class="entry__field">
                        <input
                          class="input "
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autocomplete="off"
                          placeholder="EMAIL"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      class="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: '"Helvetica", sans-serif',
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                    <label
                      class="entry__specification"
                      style={{
                        fontSize: "12px",
                        textAlign: "left",
                        fontFamily: '"Helvetica", sans-serif',
                        color: "#8390A4",
                      }}
                    >
                      Provide your email address to subscribe. For e.g
                      abc@xyz.com
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0;" }}>
                <div class="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    class="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: "700",
                      fontFamily: '"Helvetica", sans-serif',
                      color: "#FFFFFF",
                      backgroundColor: "#3E4857",
                      borderRadius: "3px",
                      borderWidth: "0px",
                    }}
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    PIN AS A CALL
                  </button>
                </div>
              </div>

              <input
                type="text"
                name="email_address_check"
                value=""
                class="input--hidden"
              />
              <input type="hidden" name="locale" value="en" />
            </form>
            <script
              dangerouslySetInnerHTML={{
                __html: ` window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
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

  var AUTOHIDE = Boolean(0);`,
              }}
            ></script>
          </div>
        </div>
      </div>

      <script
        defer
        src="https://sibforms.com/forms/end-form/build/main.js"
      ></script>
    </>
  );
}
