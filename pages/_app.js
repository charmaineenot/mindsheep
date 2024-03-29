import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import ReactQuoraPixel from "react-quora-pixel";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "G-BFJGL2563L", {
      page_path: url,
    });
  };
  //   const brevoCss = ` @font-face {
  //     font-display: block;
  //     font-family: Roboto;
  //     src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  //   }

  //   @font-face {
  //     font-display: fallback;
  //     font-family: Roboto;
  //     font-weight: 600;
  //     src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  //   }

  //   @font-face {
  //     font-display: fallback;
  //     font-family: Roboto;
  //     font-weight: 700;
  //     src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  //   }

  //   #sib-container input:-ms-input-placeholder {
  //     text-align: left;
  //     font-family: "Helvetica", sans-serif;
  //     color: #c0ccda;
  //   }

  //   #sib-container input::placeholder {
  //     text-align: left;
  //     font-family: "Helvetica", sans-serif;
  //     color: #c0ccda;
  //   }

  //   #sib-container textarea::placeholder {
  //     text-align: left;
  //     font-family: "Helvetica", sans-serif;
  //     color: #c0ccda;
  //   }
  // `;

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // useEffect(async () => {
  //   const { default: ReactPixel } = await import('react-facebook-pixel');
  //   ReactPixel.init('1083310298772388', null, {
  //       autoConfig: true,
  //       debug: true,
  //     });
  //   ReactPixel.pageView();
  //   ReactPixel.track("ViewContent")
  // });

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  // useEffect(() => {
  //   window.$crisp = [];
  //   window.CRISP_WEBSITE_ID = "da0c0fd6-e7f0-4eb5-b019-f55e492138e6";
  //   (() => {
  //     const d = document;
  //     const s = d.createElement("script");
  //     s.src = "https://client.crisp.chat/l.js";
  //     s.async = 1;
  //     d.getElementsByTagName("body")[0].appendChild(s);
  //   })();
  // });

  useEffect(() => {
    !(function (q, e, v, n, t, s) {
      if (q.qp) return;
      n = q.qp = function () {
        n.qp ? n.qp.apply(n, arguments) : n.queue.push(arguments);
      };
      n.queue = [];
      t = document.createElement(e);
      t.async = !0;
      t.src = v;
      s = document.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, "script", "https://a.quora.com/qevents.js");
    qp("init", "e9b821e7c54040bcacba26fbe2ff3931");
    qp("track", "ViewContent");

    <noscript>
      <img
        height="1"
        width="1"
        style="display:none"
        src="https://q.quora.com/_/ad/e9b821e7c54040bcacba26fbe2ff3931/pixel?tag=ViewContent&noscript=1"
      />
    </noscript>;
  });

  return (
    <>
      <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="facebook-domain-verification" content="eaw09084tc0bpcfl2ukw56x6cmybeh" /> */}
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="preload"
          href="/fonts/AlyssumSans/AlyssumSans.TTF"
          as="font"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          async
          defer
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        // bootstrap CDN
        {/* <link
    strategy="lazyOnload" async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    />
    <script
    strategy="lazyOnload" async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script> */}
        <script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BFJGL2563L"
        ></script>
        <script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFJGL2563L', { page_path: window.location.pathname });
        `,
          }}
        />
        <script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1083310298772388');
        fbq('track', 'PageView');
        `,
          }}
        />
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K3CZ2MV');`,
          }}
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1083310298772388&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <style>{brevoCss}</style>
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        /> */}
        <script
          strategy="lazyOnload"
          async
          src="https://retune.so/api/script/chat.js?id=11ee68a6-0745-aa50-be5e-2b931a827dd1"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
