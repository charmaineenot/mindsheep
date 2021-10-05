import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
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

  useEffect(async () => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('1083310298772388', null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  });

  return (
    <>
    <Head>
    // Responsive meta tag
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="facebook-domain-verification" content="eaw09084tc0bpcfl2ukw56x6cmybeh" />
    <link rel="preload" href="/fonts/AlyssumSans/AlyssumSans.TTF" as="font" crossOrigin="" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link async defer href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    //  bootstrap CDN
    <link
    strategy="lazyOnload" async href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
    crossorigin="anonymous" 
    />
    <script
    strategy="lazyOnload" async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script>
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
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
