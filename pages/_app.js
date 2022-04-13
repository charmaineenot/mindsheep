import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import ReactQuoraPixel from 'react-quora-pixel';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-BFJGL2563L', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
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
    import("bootstrap/dist/js/bootstrap.bundle")
  }, []);

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "da0c0fd6-e7f0-4eb5-b019-f55e492138e6";
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
  });

  useEffect(() => {
    !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
    qp('init', 'e9b821e7c54040bcacba26fbe2ff3931');
    qp('track', 'ViewContent');

    <noscript><img height="1" width="1" style="display:none" src="https://q.quora.com/_/ad/e9b821e7c54040bcacba26fbe2ff3931/pixel?tag=ViewContent&noscript=1"/></noscript>
  });

  return (
    <>
    <Head>
    // Responsive meta tag
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <meta name="facebook-domain-verification" content="eaw09084tc0bpcfl2ukw56x6cmybeh" /> */}
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="preload" href="/fonts/AlyssumSans/AlyssumSans.TTF" as="font" crossOrigin="" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link async defer href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    //  bootstrap CDN
    {/* <link
    strategy="lazyOnload" async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    />
    <script
    strategy="lazyOnload" async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script> */}
    <script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-BFJGL2563L"></script>
    <script strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BFJGL2563L', { page_path: window.location.pathname });
        `,
      }}
    />
    <script strategy="lazyOnload"
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
    <noscript><img height="1" width="1" style={{display:"none"}}
    src="https://www.facebook.com/tr?id=1083310298772388&ev=PageView&noscript=1"
    /></noscript>
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
